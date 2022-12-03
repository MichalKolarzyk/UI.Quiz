import { useState } from "react";
import IuseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import ILoginFormViewModel from "./ILoginFormViewModel";

const LoginFormViewModel = (props: LoginFormViewModelProps) => {
    const quizApi = props.useQuizApi;
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = () => {
        quizApi.signIn({login, password}, (e) => console.log(e), () => {setLogin(""); setPassword("")});
    }

    return {
        login,
        setLogin,
        password,
        setPassword,
        disabled : quizApi.isBusy,
        submit,
    } as ILoginFormViewModel;
}

export interface LoginFormViewModelProps{
    useQuizApi: IuseQuizApi
}

export default LoginFormViewModel;