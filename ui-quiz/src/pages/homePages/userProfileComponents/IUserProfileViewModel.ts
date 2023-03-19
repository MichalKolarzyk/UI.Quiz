import { IGetUserProfileResponse } from "../../../apis/apiQuiz/ApiQuizModels";

export interface IUserProfileViewModel{
    userProfile:  IGetUserProfileResponse | null;
    disabled: boolean;
}