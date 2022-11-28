import React, {
  useEffect,
  useState,
  memo,
  lazy,
  ReactElement,
  Suspense,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';

import Selector from './components/Selector';

import {
  chooseBreed,
  chooseSubBreed,
  fetchBreed,
  fetchImages,
  addFetcher,
  removeFetcher,
} from './redux/action';

import './App.css';
import { IStore } from './interfaces';
import { Loader } from './components/Loader';

import { AppDispatch } from './redux/index';

const ShowСollage = lazy(() => import('./components/modals/ShowCollage'));

function App(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesCount, setImagesCount] = useState(1);

  const {
    subBreeds,
    breeds,
    requests,
    currentBreed,
    currentSubBreed,
    isLoading,
  } = useSelector((state: IStore) => state);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBreed());
  }, []);

  const handleOpenModal = () => {
    const data = {
      breed: breeds[currentBreed],
      subBreed: subBreeds[currentSubBreed],
      count: imagesCount,
    };
    dispatch(addFetcher(data));
  };

  const handleChangeCount = (value: number) => {
    if (value < 1) {
      return setImagesCount(1);
    }
    return setImagesCount(value);
  };

  const onGenerate = () => {
    setIsOpen(true);
    dispatch(fetchImages());
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <div className="Header">
        <Selector
          fields={breeds}
          value={currentBreed}
          label="Change breed"
          handleChange={(_: any, index: number) => dispatch(chooseBreed(index))}
        />
        <Selector
          fields={subBreeds}
          value={subBreeds.length ? currentSubBreed : -1}
          label="Change sub-breed"
          handleChange={(_: any, index: number) => dispatch(chooseSubBreed(index))}
        />
        <TextField
          id="outlined-basic"
          label="Count"
          variant="outlined"
          value={imagesCount}
          onChange={(e) => handleChangeCount(+e.target.value)}
          type="number"
        />
        <Button
          variant="contained"
          onClick={() => handleOpenModal()}
          disabled={currentBreed === -1}
        >
          Create
        </Button>
        <Suspense fallback={<Loader />}>
          <ShowСollage isOpen={isOpen} handelClose={() => setIsOpen(false)} />
        </Suspense>
      </div>
      <div>
        {requests.map((item, index) => (
          <div className="Table" key={index}>
            <div className="MenuItem">
              {item.breed}
            </div>
            <div className="MenuItem">
              {item.subBreed ?? 'No sub-breed'}
            </div>
            <div className="MenuItem">
              {item.count}
            </div>
            <Button onClick={() => dispatch(removeFetcher(item))}>Remove</Button>
          </div>
        ))}
      </div>
      <Button onClick={onGenerate} disabled={!requests.length}>Generate</Button>
    </div>
  );
}

export default memo(App);
