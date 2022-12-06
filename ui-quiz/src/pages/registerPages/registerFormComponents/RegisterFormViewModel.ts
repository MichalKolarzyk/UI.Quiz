import { useState } from "react";
import IUseQuizApi from "../../../applicationHooks/useQuizApis/IUseQuizApi";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormViewModel = (props: RegisterFormViewModelProps) => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repetePassword, setRepetePassword] = useState<string>("");

    const submit = () => {
        props.useQuizApi.register({login, password}, () => {}, () => {}, () => {});
    }
    
    return {
        login,
        setLogin,
        password,
        setPassword,
        repetePassword,
        setRepetePassword,
        submit,
        disabled: props.useQuizApi.isBusy,
    } as IRegisterFormViewModel;
}

export interface RegisterFormViewModelProps{
    useQuizApi: IUseQuizApi
}

export default RegisterFormViewModel;