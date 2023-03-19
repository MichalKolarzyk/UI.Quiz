import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ISignInRequest, ISignInResponse, IGetUserProfileResponse, IRegisterRequest, IRegisterResponse } from "./ApiQuizModels";

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

    setJWT(token?: string) {
        if(token){
            this.instance.defaults.headers["Authorization"] = `Bearer ${token}`;
        }
    }

    signIn = async (request: ISignInRequest) : Promise<AxiosResponse<ISignInResponse>> => {
        return await this.instance.post<ISignInRequest, AxiosResponse<ISignInResponse>>(`/account/login`, request)
    }
    
    register = async (request: IRegisterRequest): Promise<AxiosResponse<IRegisterResponse>> => {
        return await this.instance.post<IRegisterRequest, AxiosResponse<IRegisterResponse>>(`/account/register`, request)
    }

    getUserProfile = async () : Promise<AxiosResponse<IGetUserProfileResponse>> =>{
        return await this.instance.get<IGetUserProfileResponse>("/userProfile")
    }

}

export default new ApiQuizInstance("http://localhost:5000");