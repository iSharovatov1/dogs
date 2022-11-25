import { createReducer } from '@reduxjs/toolkit';

import {
  fetchBreed, chooseBreed, chooseSubBreed, fetchImages,
} from './action';

const initialState = {
  Dogs: {},
  breeds: [],
  subBreeds: [],
  currentBreed: -1,
  currentSubBreed: -1,
  imagesCount: 1,
  images: [],
  isLoading: false,
  error: null,
};

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
    .addCase(fetchBreed.rejected, (state, action) => {
      state.error = action.payload.data;
      state.isLoading = false;
    })

    .addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchImages.rejected, (state, action) => {
      state.error = action.payload.data;
      state.isLoading = false;
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
