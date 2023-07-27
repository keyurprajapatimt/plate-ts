export interface FetchAction {
  type: string;
  payload: AuthPayload;
}

export interface AuthPayload {
  email: string;
  password: string;
}
