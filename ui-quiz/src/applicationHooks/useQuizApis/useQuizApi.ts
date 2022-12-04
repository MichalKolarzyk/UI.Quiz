import { useState } from "react";
import ApiQuizInstance from "../../infrastructure/apiQuiz/ApiQuizInstance";
import { IErrorResponse, IGetUserProfileResponse, ISignInRequest as ISignInRequest, ISignInResponse as ISignInResponse } from "../../infrastructure/apiQuiz/ApiQuizModels";
import useBrowserCache from "../../infrastructure/useBrowserCaches/useBrowserCache";
import IUseQuizApi from "./IUseQuizApi";

const useQuizApi = () => {
    const [signInResponse, setSignInResponse] = useBrowserCache<ISignInResponse>("USEQUIZAPI_ISIGNINRESPONSE");
    const [userProfile, setUserProfile] = useState<IGetUserProfileResponse | null>(null);
    const [isBusy, setIsBusy] = useState<boolean>(false);
    const [isLogIn, setIsLogIn] = useState<boolean>(!!signInResponse);

    const onSignInResponseInternal = (response: ISignInResponse) => {
        setSignInResponse(response);
        setIsLogIn(true);
    }

    const signIn = (request: ISignInRequest, onSignInResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => {
        ApiQuizInstance.login(request, (r) => {onSignInResponseInternal(r); onSignInResponse();}, onError, () => {onFinally(); setIsBusy(false)});
        setIsBusy(true);
    }

    const singOut = () => {
        setSignInResponse(null);
        setIsLogIn(false);
    }

    const fetchUserProfile = (onGetUserProfileResponse: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => {
        ApiQuizInstance.getUserProfile(signInResponse?.token, r => {console.log(r);setUserProfile(r); onGetUserProfileResponse()}, onError, () => {onFinally(); setIsBusy(false)})
        setIsBusy(true);
    }

    return{
        signIn: signIn,
        singOut: singOut,
        fetchUserProfile,
        userProfile,
        isLogIn: isLogIn,
        isBusy: isBusy,
    }as IUseQuizApi;
}

export default useQuizApi;