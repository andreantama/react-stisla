import { createSlice, configureStore } from '@reduxjs/toolkit';
import dataToastSlice from './toast';

const store = configureStore({
  reducer: {
    toast: dataToastSlice.reducers
  }
});
export default store;
