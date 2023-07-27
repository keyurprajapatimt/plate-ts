import authSlice from '../auth/slice';

//Register all your reducers here, E.g: "home: homeSlice",
const reducers = {
  user: authSlice,
  //home: homeSlice
};
export default reducers;
