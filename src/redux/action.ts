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
  async (req: IGetImagesParams) => {
    const data = await getImages(req);
    return data;
  },
);

export const chooseBreed = createAction<number, 'chooseBreed'>('chooseBreed');
export const chooseSubBreed = createAction<number, 'chooseSubBreed'>('chooseSubBreed');
