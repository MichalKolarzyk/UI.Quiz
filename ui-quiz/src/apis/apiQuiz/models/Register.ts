export interface IRegisterRequest {
  login: string;
  password: string;
  repetePassword: string;
}

export interface IRegisterResponse {}

export interface IRegisterError {
  login: string;
  password: string;
  repetePassword: string;
}
