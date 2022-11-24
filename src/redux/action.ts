import { createAsyncThunk, createAction } from '@reduxjs/toolkit'

import { getAllBreed, getImages } from '../api/fetch'

import * as ACTION_TYPE from '../constants/actionTypes';

export const fetchBreed = createAsyncThunk(
  'breed/fetchBreed',
  async (thunkAPI) => {
    // const response = await getAllBreed();    
    return await getAllBreed()
  }
)

export const fetchImages = createAsyncThunk(
  'breed/fetchImages',
  async (data: any, thunkAPI) => {
    // const response = await getAllBreed();
    // console.log(breed, subBred, count);
    
    console.log('jjjjj',await getImages(data));
    
    return await getImages(data)
  }
)

export const chooseBreed = createAction<number, 'chooseBreed'>('chooseBreed')
export const chooseSubBreed = createAction<number, 'chooseSubBreed'>('chooseSubBreed')
