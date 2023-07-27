import {RootState} from '../store';

export const getAuthUser = (state: RootState) => state.user.userData;

export const getAuthLoader = (state: RootState) => state.user.isLoading;

export const getAuthError = (state: RootState) => state.user.error;
