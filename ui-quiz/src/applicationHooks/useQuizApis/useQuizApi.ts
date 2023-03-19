import { useEffect, useState } from "react";
import ApiQuizInstance from "../../infrastructure/apiQuiz/ApiQuizInstance";
import { IErrorResponse, IGetUserProfileResponse, IRegisterRequest, ISignInRequest as ISignInRequest, ISignInResponse as ISignInResponse } from "../../apis/apiQuiz/ApiQuizModels";
import useBrowserCache from "../../hooks/useBrowserCache";
import IUseQuizApi from "./IUseQuizApi";

const useQuizApi = () => {
    const [signInResponse, setSignInResponse] = useBrowserCache<ISignInResponse>("USEQUIZAPI_ISIGNINRESPONSE");
    const [userProfile, setUserProfile] = useState<IGetUserProfileResponse | null>(null);
    const [isBusy, setIsBusy] = useState<boolean>(false);
    const [isLogIn, setIsLogIn] = useState<boolean>(!!signInResponse);

    const [currentWorkspaceId, setCurrentWorkspaceId] = useState<string>("");



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

    const register = (request: IRegisterRequest, onRegisterRespons: () => void, onError: (error : IErrorResponse) => void, onFinally: () => void) => {
        ApiQuizInstance.register(request, (r) => onRegisterRespons(), onError,() => {onFinally(); setIsBusy(false)});
        setIsBusy(true);
    }

    useEffect(()=>{

    },[currentWorkspaceId])

    return{
        signIn: signIn,
        singOut: singOut,
        register: register,
        userProfile,
        isLogIn: isLogIn,
        isBusy: isBusy,
    }as IUseQuizApi;
}

export default useQuizApi;