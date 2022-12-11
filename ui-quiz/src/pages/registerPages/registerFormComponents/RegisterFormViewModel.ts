import { useState } from "react";
import IUseQuizApi from "../../../applicationHooks/useQuizApis/IUseQuizApi";
import { IErrorResponse } from "../../../infrastructure/apiQuiz/ApiQuizModels";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormViewModel = (props: RegisterFormViewModelProps) => {
    const [login, setLogin] = useState<string>("");
    const [loginError, setLoginError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [repetePassword, setRepetePassword] = useState<string>("");
    const [repetePasswordError, setRepetePasswordError] = useState<string>("");

    const submit = (onRegistartionSucceed: () => void) => {
        setRepetePasswordError("");
        if(password !== repetePassword){
            setRepetePasswordError("Repete password doesn't match to password");
            return;
        }
        props.useQuizApi.register({login, password}, onRegistartionSucceed, onSubmitError, () => {});
    }

    const onSubmitError = (error: IErrorResponse) => {
        setLoginError(error.errors.Login);
        setPasswordError(error.errors.Password);
      };
    
    return {
        login,
        loginError,
        setLogin,
        password,
        setPassword,
        passwordError,
        repetePassword,
        repetePasswordError,
        setRepetePassword,
        submit,
        disabled: props.useQuizApi.isBusy,
    } as IRegisterFormViewModel;
}

export interface RegisterFormViewModelProps{
    useQuizApi: IUseQuizApi
}

export default RegisterFormViewModel;