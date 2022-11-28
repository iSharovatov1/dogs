import { createReducer } from '@reduxjs/toolkit';
import { IAddFetcher, IFetchImagesReject, IStore } from '../interfaces';

import {
  fetchBreed,
  chooseBreed,
  chooseSubBreed,
  fetchImages,
  addFetcher,
  removeFetcher,
} from './action';

const initialState = {
  Dogs: {},
  breeds: [],
  subBreeds: [],
  currentBreed: -1,
  currentSubBreed: -1,
  imagesCount: 1,
  images: [],
  requests: [],
  isLoading: false,
  error: null,
} as IStore;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBreed.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchBreed.fulfilled, (state, action) => {
      state.Dogs = action.payload;
      state.breeds = Object.keys(action.payload);
      state.isLoading = false;
    })
    .addCase(fetchBreed.rejected, (state, action: any) => {
      state.error = action.payload.data;
      state.isLoading = false;
    })

    .addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload as [string];
      state.isLoading = false;
    })
    .addCase(fetchImages.rejected, (state, action) => {
      state.error = action.payload.data;
      state.isLoading = false;
    })

    .addCase(addFetcher, (state, action: IAddFetcher) => {
      state.requests.push(action.payload);
    })
    .addCase(removeFetcher, (state, action) => {
      state.requests = state.requests
        .filter((item) => JSON.stringify(action.payload) !== JSON.stringify(item));
    })
    .addCase(chooseBreed, (state, action) => {
      state.currentBreed = action.payload.props.value;
      state.subBreeds = state.Dogs[`${action.payload.props.children}`];
    })
    .addCase(chooseSubBreed, (state, action) => {
      state.currentSubBreed = action.payload.props.value;
    });
});

export default reducer;
