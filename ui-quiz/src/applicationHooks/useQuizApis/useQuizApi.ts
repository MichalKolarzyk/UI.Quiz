import { useState } from "react";
import ApiQuizInstance from "../../infrastructure/apiQuiz/ApiQuizInstance";
import { IErrorResponse, ISignInRequest as ISignInRequest, ISignInResponse as ISignInResponse } from "../../infrastructure/apiQuiz/ApiQuizModels";
import useBrowserCache from "../../infrastructure/useBrowserCaches/useBrowserCache";
import IuseQuizApi from "./IUseQuizApi";

const useQuizApi = () => {
    const [token, setToken] = useBrowserCache<ISignInResponse>("USEQUIZAPI_ISIGNINRESPONSE");
    const [isBusy, setIsBusy] = useState<boolean>(false);
    const [isLogIn, setIsLogIn] = useState<boolean>(!!token);

    const onSignInResponseInternal = (response: ISignInResponse) => {
        setToken(response);
        setIsLogIn(true);
    }

    const signIn = (request: ISignInRequest, onSignInResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => {
        ApiQuizInstance.login(request, (r) => {onSignInResponseInternal(r); onSignInResponse();}, onError, () => {onFinally(); setIsBusy(false)});
        setIsBusy(true);
    }

    const singOut = () => {
        setToken(null);
        setIsLogIn(false);
    }

    return{
        signIn: signIn,
        singOut: singOut,
        isLogIn: isLogIn,
        isBusy: isBusy,
    }as IuseQuizApi;
}

export default useQuizApi;