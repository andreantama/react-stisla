import { createSlice } from '@reduxjs/toolkit';

const intialStateToast = {
  success: false,
  error: false,
  info: false,
  warning: false,
};

const dataToastSlice = createSlice({
  name:'toastData',
  initialState: intialStateToast,
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
    resetNotif(state, payload){
      state.success = false;
      state.error = false;
      state.info = false;
      state.warning = false;
    },
  }
});
export const toastActions = dataToastSlice.actions;
export default dataToastSlice.reducer;