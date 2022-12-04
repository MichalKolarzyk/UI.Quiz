import axios, { AxiosInstance, AxiosResponse } from "axios"
import { IErrorResponse, IGetUserProfileResponse, ISignInRequest, ISignInResponse } from "./ApiQuizModels";

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
        .catch((axiosError) => onError(axiosError.response.data))
        .finally(onFinally)
    }

    getUserProfile = (token: string, onResponse : (response : IGetUserProfileResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => {
        const config = {headers: { Authorization: `Bearer ${token}` }}
        this.instance.get("/userProfile", config)
        .then((axiosResponse) => onResponse(axiosResponse.data))
        .catch((axiosError) => onError(axiosError.response.data))
        .finally(onFinally)
    }
}

export interface IApiQuizInstance{
    login: (request: ISignInRequest, onResponse : (response : ISignInResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => void;
}

export default new ApiQuizInstance("http://localhost:5000")