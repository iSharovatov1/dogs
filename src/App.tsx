import {
  useEffect,
  useState,
  memo,
  ReactElement,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';

import Selector from './components/Selector';
import ShowСollage from './components/modals/showСollage';

import {
  chooseBreed,
  chooseSubBreed,
  fetchBreed,
  fetchImages,
} from './redux/action';

import './App.css';

function App(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesCount, setImagesCount] = useState(1);

  const {
    subBreeds,
    breeds,
    currentBreed,
    currentSubBreed,
  } = useSelector((state: any) => state);

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
        onChange={(e) => setImagesCount(e.target.value)}
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
