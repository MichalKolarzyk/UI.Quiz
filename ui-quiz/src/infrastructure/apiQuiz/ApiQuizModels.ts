export interface ISignInRequest{
    login: string;
    password: string;
}

export interface ISignInResponse{
    token: string;
}

export interface IErrorResponse{
    errors: Array<string>
}