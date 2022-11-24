import { createReducer } from '@reduxjs/toolkit'
import { createGrid } from '../helper';

import { fetchBreed, chooseBreed, chooseSubBreed, fetchImages } from './action';

const initialState = {
  allData: {},
  allBreed: [],
  allSubBreed: [],
  currentBreed: -1,
  currentSubBreed: -1,
  imagesCount: 1,
  images: [],
  loading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBreed.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchBreed.fulfilled, (state, action) => {
      state.allData = action.payload
      state.allBreed = Object.keys(action.payload)
      state.loading = false
    })
    .addCase(fetchBreed.rejected, (state, action) => {
      state.error = action.payload.data
      state.loading = false
    })

    .addCase(fetchImages.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload
      console.log(action.payload);
      
      state.loading = false
    })
    .addCase(fetchImages.rejected, (state, action) => {
      state.error = action.payload.data
      state.loading = false
    })

    .addCase(chooseBreed, (state, action) => {
      
      state.currentBreed = action.payload.props.value
      // console.log(state.allData[`${action.payload.props.children}`]
      
      state.allSubBreed = state.allData[`${action.payload.props.children}`]
    })
    .addCase(chooseSubBreed, (state, action) => {      
      state.currentSubBreed = action.payload.props.value
    })
})

export default reducer;