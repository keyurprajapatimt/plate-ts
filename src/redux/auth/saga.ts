import {call, takeEvery, put} from 'redux-saga/effects';
import * as NavigationService from 'react-navigation-helpers';
import {AUTH_USER_SAGA} from '../../constants/actionNames';
import {setLoginUser, setError, startLoading} from './slice';
import {authUser} from '../../helper/api';
import {FetchAction} from './models';

export function* authenticateUser(action: FetchAction): any {
  const {payload} = action;
  try {
    yield put(startLoading());
    // if response data is big then plz create a seperate modal file
    const response: {token: string} = yield call(authUser, payload);
    yield put(setLoginUser(response));
    NavigationService.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  } catch (error) {
    yield put(setError('Something went worng, plz try again...'));
  }
}

export default function* authSaga() {
  yield takeEvery(AUTH_USER_SAGA, authenticateUser);
}
