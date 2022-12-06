import { IErrorResponse, IGetUserProfileResponse, IRegisterRequest, ISignInRequest } from "../../infrastructure/apiQuiz/ApiQuizModels";

export default interface IUseQuizApi{
    signIn: (request: ISignInRequest, onSignInResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => void;
    register: (request: IRegisterRequest, onRegisterRespons: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => void;
    fetchUserProfile: (onGetUserProfileResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => void;
    userProfile: IGetUserProfileResponse | null,
    singOut: () => void;
    isLogIn: boolean;
    isBusy: boolean;
}