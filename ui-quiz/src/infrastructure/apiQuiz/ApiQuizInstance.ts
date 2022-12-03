import axios, { AxiosInstance, AxiosResponse } from "axios"
import { IErrorResponse, ISignInRequest, ISignInResponse } from "./ApiQuizModels";

export class ApiQuizInstance{
    instance: AxiosInstance;
    constructor(baseUrl: string){
        this.instance = axios.create(
            {
                baseURL: baseUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    login = (request: ISignInRequest, onResponse : (response : ISignInResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => {
        this.instance.post<ISignInRequest, AxiosResponse<ISignInResponse>>(`/account/login`, request)
        .then((axiosResponse) => onResponse(axiosResponse.data))
        .catch(onError)
        .finally(onFinally)
    }
}

export interface IApiQuizInstance{
    login: (request: ISignInRequest, onResponse : (response : ISignInResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => void;
}

export default new ApiQuizInstance("http://localhost:5000")