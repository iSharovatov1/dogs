import React, { useEffect, useState } from 'react';
import './App.css';
import Selecter from './components/Selecter';
import { Button, TextField } from '@mui/material';
import ShowСollage from './components/modals/showСollage';
import { useDispatch, useSelector } from 'react-redux';
import { chooseBreed, chooseSubBreed, fetchBreed, fetchImages } from './redux/action';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesCount, setImagesCount] = useState(1);
  const {
    allSubBreed,
    allBreed,
    currentBreed,
    currentSubBreed
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreed());
  }, []);  

  const createCallage = () => {
    const width = 1500;
    const height = 1500;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    // context!.drawImage('', 0, 0, width, height);
  }

  const handleOpenModal = () => {
    setIsOpen(true)
    // console.log(allSubBreed,currentSubBreed, allSubBreed[currentSubBreed]);
    const data = {
      breed: allBreed[currentBreed],
      subBreed: allSubBreed[currentSubBreed],
      count: imagesCount,
    }
    
    dispatch(fetchImages(data))
  }
  
  return (
    <div className="App">
      { allBreed && <Selecter data={allBreed} value={currentBreed} handleChange={(_, index) => dispatch(chooseBreed(index))}/>}
      { !!allSubBreed.length && <Selecter
        data={allSubBreed}
        value={currentSubBreed}
        handleChange={(_, index) => dispatch(chooseSubBreed(index))}
      />}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={imagesCount}
        onChange={(e) => setImagesCount(e.target.value)}
        type='number'
      />
      <Button variant="contained" onClick={() => handleOpenModal()}>Contained</Button>
      <ShowСollage isOpen={isOpen} handelClose={() => setIsOpen(false)}/>
    </div>
  );
}

export default App;
