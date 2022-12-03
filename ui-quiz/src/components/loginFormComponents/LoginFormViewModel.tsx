import { useState } from "react";
import useQuizApi from "../../infrastructure/quizApis/useQuizApi";
import ILoginFormViewModel from "./ILoginFormViewModel";

const LoginFormViewModel = () => {
    const quizApi = useQuizApi();
    const [disabled, setDisabled] = useState<boolean>(true);

    const [login, setLoginInternal] = useState<string>("");
    const setLogin = (value: string) => {
        updateDisabledState(value, password)
        setLoginInternal(value);
    }
    
    const [password, setPasswordInternal] = useState<string>("");
    const setPassword = (value: string) => {
        updateDisabledState(login, value);
        setPasswordInternal(value);
    }

    const submit = () => {
        quizApi.login();
    }

    const updateDisabledState = (login: string, password: string) => {
        if(login.length > 0 && password.length > 0){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

    return {
        login,
        setLogin,
        password,
        setPassword,
        disabled,
        submit,
    } as ILoginFormViewModel;
}

export default LoginFormViewModel;