import { configureStore } from '@reduxjs/toolkit';
import dataToastSlice from './toast';

const store = configureStore({
  reducer: { toastData: dataToastSlice },
});
export default store;
