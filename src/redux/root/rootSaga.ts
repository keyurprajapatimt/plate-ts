import {spawn} from 'redux-saga/effects';
import authSaga from '../auth/saga';

//Register all possible saga's here. E.g: HomeSaga, ChatSaga, RegisterSaga
export default function* rootSaga() {
  yield spawn(authSaga);
}
