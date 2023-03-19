import axios, { AxiosInstance, AxiosResponse } from "axios"
import { IErrorResponse, IGetQuizesRequest, IGetQuizesResponse, IGetUserProfileResponse, IRegisterRequest, IRegisterResponse, ISignInRequest, ISignInResponse } from "../../apis/apiQuiz/ApiQuizModels";

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

    register = (request: IRegisterRequest, onResponse : (response : IRegisterResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => {
        this.instance.post<IRegisterRequest, AxiosResponse<IRegisterResponse>>(`/account/register`, request)
        .then((axiosResponse) => onResponse(axiosResponse.data))
        .catch((axiosError) => onError(axiosError.response.data))
        .finally(onFinally)
    }

    getQuizes = (token: string, request: IGetQuizesRequest, onResponse : (response : IGetQuizesResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            params: request,
         }
        this.instance.get("/quiz", config)
        .then((axiosResponse) => onResponse(axiosResponse.data))
        .catch((axiosError) => onError(axiosError.response.data))
        .finally(onFinally)
    }
}

export interface IApiQuizInstance{
    login: (request: ISignInRequest, onResponse : (response : ISignInResponse) => void, onError: (error: IErrorResponse) => void, onFinally: () => void) => void;
}

export default new ApiQuizInstance("http://localhost:5000")