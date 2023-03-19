import { IErrorResponse, IGetUserProfileResponse, IRegisterRequest, ISignInRequest } from "../../apis/apiQuiz/ApiQuizModels";

export default interface IUseQuizApi{
    signIn: (request: ISignInRequest, onSignInResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => void;
    register: (request: IRegisterRequest, onRegisterRespons: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => void;
    singOut: () => void;
    userProfile: IGetUserProfileResponse | null,
    isLogIn: boolean;
    isBusy: boolean;
}