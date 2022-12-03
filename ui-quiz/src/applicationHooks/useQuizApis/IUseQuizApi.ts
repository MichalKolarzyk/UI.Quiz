import { IErrorResponse, ISignInRequest } from "../../infrastructure/apiQuiz/ApiQuizModels";

export default interface IuseQuizApi{
    signIn: (request: ISignInRequest, onSignInResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => void;
    singOut: () => void;
    isLogIn: boolean;
    isBusy: boolean;
}