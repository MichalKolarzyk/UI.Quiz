import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ISignInRequest, ISignInResponse, IGetUserProfileResponse, IRegisterRequest, IRegisterResponse, CreateQuestionRequest, UpdateQuestionRequest, Question, FilterQuestionsRequest, FilterQuestionResponse, CreateQuestionResponse } from "./ApiQuizModels";

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

    createQuestion = async (request: CreateQuestionRequest) =>{
        return await this.instance.post<CreateQuestionRequest, AxiosResponse<CreateQuestionResponse>>("/question/create", request)
    }

    updateQuestion = async (request: UpdateQuestionRequest) =>{
        return await this.instance.put<CreateQuestionRequest, AxiosResponse>("/question/update", request)
    }

    getQuestionById = async (id: string) : Promise<AxiosResponse<Question>>=>{
        return await this.instance.get(`/question/${id}`)
    }

    getQuestions = async (request: FilterQuestionsRequest): Promise<AxiosResponse<FilterQuestionResponse>> =>{
        return await this.instance.post<FilterQuestionsRequest, AxiosResponse<FilterQuestionResponse>>("/question", request)
    }

}

export default new ApiQuizInstance("http://localhost:5000");