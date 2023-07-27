import {endPoint} from '../constants/endPoints';
import API from './apiHelper';

const apiHeader = {
  'Content-Type': 'application/json',
};

export const authUser = async (params: any) => {
  const response = await API.post(endPoint.LOGIN_API, params, apiHeader);
  return response;
};
