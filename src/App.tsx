import {
  useEffect,
  useState,
  memo,
  ReactElement,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';

import Selector from './components/Selector';
import ShowСollage from './components/modals/ShowСollage';

import {
  chooseBreed,
  chooseSubBreed,
  fetchBreed,
  fetchImages,
} from './redux/action';

import './App.css';
import { IStore } from './interfaces';

function App(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesCount, setImagesCount] = useState(1);

  const {
    subBreeds,
    breeds,
    currentBreed,
    currentSubBreed,
  } = useSelector((state: IStore) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreed());
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
    const data = {
      breed: breeds[currentBreed],
      subBreed: subBreeds[currentSubBreed],
      count: imagesCount,
    };
    dispatch(fetchImages(data));
  };

  const handleChangeCount = (value: number) => {
    if (value < 1) {
      return setImagesCount(1);
    }
    return setImagesCount(value);
  };

  return (
    <div className="App">
      { breeds && (
      <Selector
        fields={breeds}
        value={currentBreed}
        label="Change breed"
        handleChange={(_, index: number) => dispatch(chooseBreed(index))}
      />
      )}
      <Selector
        fields={subBreeds}
        value={subBreeds.length ? currentSubBreed : []}
        label="Change sub-breed"
        handleChange={(_, index: number) => dispatch(chooseSubBreed(index))}
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
      <ShowСollage isOpen={isOpen} handelClose={() => setIsOpen(false)} />
    </div>
  );
}

export default memo(App);
