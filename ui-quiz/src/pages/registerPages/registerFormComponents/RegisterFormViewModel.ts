import { useState } from "react";
import IUseQuizApi from "../../../applicationHooks/useQuizApis/IUseQuizApi";
import { IErrorResponse } from "../../../apis/apiQuiz/ApiQuizModels";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormViewModel = (props: RegisterFormViewModelProps) => {
    const [login, setLogin] = useState<string>("");
    const [loginError, setLoginError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [repetePassword, setRepetePassword] = useState<string>("");
    const [repetePasswordError, setRepetePasswordError] = useState<string>("");

    const submit = (onRegistartionSucceed: () => void) => {
        props.useQuizApi.register({login, password, repetePassword}, onRegistartionSucceed, onSubmitError, () => {});
    }

    const onSubmitError = (error: IErrorResponse) => {
        setLoginError(error.errors.Login);
        setPasswordError(error.errors.Password);
        setRepetePasswordError(error.errors.RepetePassword);
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