import { IGetUserProfileResponse } from "../../../infrastructure/apiQuiz/ApiQuizModels";

export interface IUserProfileViewModel{
    userProfile:  IGetUserProfileResponse | null;
    disabled: boolean;
}