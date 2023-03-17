import { AxiosResponse } from "axios";
import { IGetUserProfileResponse, ISignInRequest, ISignInResponse } from "../../infrastructure/apiQuiz/ApiQuizModels";
import apiQuizInstance from "./QuizApiInstance";

const useQuizApi = () => {
    const signIn = async (request: ISignInRequest) : Promise<AxiosResponse<ISignInResponse>> => {
        return await apiQuizInstance.post<ISignInRequest, AxiosResponse<ISignInResponse>>(`/account/login`, request)
    }

    const getUserProfile = async (token: string) : Promise<AxiosResponse<IGetUserProfileResponse>> =>{
        const config = {headers: { Authorization: `Bearer ${token}` }}
        return await apiQuizInstance.get<IGetUserProfileResponse>("/userProfile", config)
    }

    return {
        signIn,
        getUserProfile,
    }
}

export default useQuizApi