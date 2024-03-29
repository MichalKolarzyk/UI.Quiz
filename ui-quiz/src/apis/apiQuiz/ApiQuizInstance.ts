import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IRegisterRequest, IRegisterResponse } from "./models/Register";
import { ISignInRequest, ISignInResponse } from "./models/SignIn";
import { IGetUserProfileResponse } from "./models/GetUserProfile";
import { CreateQuestionRequest, CreateQuestionResponse } from "./models/CreateQuestion";
import { UpdateQuestionRequest } from "./models/UpdateQuestion";
import { GetQuestionResponse } from "./models/GetQuestion";
import { FilterQuestionResponse, FilterQuestionsRequest } from "./models/FilterQuestions";
import { GetQuizResponse } from "./models/GetQuiz";
import { ReferenceItems } from "./models/GetReferenceItems";
import { GetQuizzesRequest, GetQuizzesResponse } from "./models/GetQuizzes";
import { CreateQuizRequest, CreateQuizResponse } from "./models/CreateQuiz";

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
        return await this.instance.get<IGetUserProfileResponse>("/account")
    }

    createQuestion = async (request: CreateQuestionRequest) =>{
        return await this.instance.post<CreateQuestionRequest, AxiosResponse<CreateQuestionResponse>>("/question/create", request)
    }

    updateQuestion = async (request: UpdateQuestionRequest) =>{
        return await this.instance.put<CreateQuestionRequest, AxiosResponse>("/question/update", request)
    }

    getQuestionById = async (id: string) : Promise<AxiosResponse<GetQuestionResponse>>=>{
        return await this.instance.get(`/question/${id}`)
    }

    getQuestions = async (request: FilterQuestionsRequest): Promise<AxiosResponse<FilterQuestionResponse>> =>{
        return await this.instance.post<FilterQuestionsRequest, AxiosResponse<FilterQuestionResponse>>("/question", request)
    }

    getReferenceItems = async (key: string) : Promise<AxiosResponse<Array<ReferenceItems>>> => {
        return await this.instance.get<Array<ReferenceItems>>(`/referenceItem?key=${key}`);
    }

    getQuizzes = async (request: GetQuizzesRequest): Promise<AxiosResponse<GetQuizzesResponse>> => {
        return await this.instance.post<GetQuizzesRequest, AxiosResponse<GetQuizzesResponse>>("/quiz", request)
    }

    getQuiz = async (id: string): Promise<AxiosResponse<GetQuizResponse>> => {
        return await this.instance.get(`/quiz/${id}`);
    }

    createQuiz =  async (request: CreateQuizRequest): Promise<AxiosResponse<CreateQuizResponse>> => {
        return await this.instance.post<CreateQuizRequest, AxiosResponse<CreateQuizResponse>>("/quiz/create", request)
    }
}

// export default new ApiQuizInstance("http://localhost:49158");
export default new ApiQuizInstance("http://localhost:5000");