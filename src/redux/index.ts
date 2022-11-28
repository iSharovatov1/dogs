import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer from './reducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer,
  middleware: () => customizedMiddleware,
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
