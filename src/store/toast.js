import { createSlice, configureStore } from '@reduxjs/toolkit';

const intialStateToast = {
  success: false,
  error: false,
  info: false,
  warning: false,
};

const dataToastSlice = createSlice({
  name:'toastData',
  intialStateToast,
  reducers: {
    showSuccess(state, payload) {
      state.success = payload;
    },
    showError(state, payload) {
      state.error = payload;
    },
    showInfo(state, payload) {
      state.info = payload;
    },
    showWarning(state, payload) {
      state.warning = payload;
    },
  }
});
export const toastActions = dataToastSlice.actions;
export default dataToastSlice;