import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { getBreeds, getImages } from '../api/fetch';
import { IGetImagesParams } from '../interfaces';

export const fetchBreed = createAsyncThunk(
  'breed/fetchBreed',
  async () => {
    const data = await getBreeds();
    return data;
  },
);

export const fetchImages = createAsyncThunk(
  'breed/fetchImages',
  async (_, thunkApi: any) => {
    const { requests } = thunkApi.getState();
    const data = [];
    for await (const i of requests) {
      const newData = await getImages(i);
      data.push(...newData);
    }

    return data;
  },
);

export const removeFetcher = createAction<IGetImagesParams, 'removeFetcher'>('removeFetcher');
export const addFetcher = createAction<IGetImagesParams, 'addFetcher'>('addFetcher');
export const chooseBreed = createAction<any, 'chooseBreed'>('chooseBreed');
export const chooseSubBreed = createAction<any, 'chooseSubBreed'>('chooseSubBreed');
