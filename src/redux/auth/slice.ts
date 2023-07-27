import {createSlice} from '@reduxjs/toolkit'; //next js redux toolkit
import {AppState} from '../models/appModels';

const initialState: AppState = {
  userData: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    },
    startLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// case under reducers becomes an action
export const {setLoginUser, startLoading, setError} = authSlice.actions;
export default authSlice.reducer;
