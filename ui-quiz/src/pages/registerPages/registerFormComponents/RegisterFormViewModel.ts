import { useState } from "react";
import { IErrorResponse } from "../../../apis/apiQuiz/ApiQuizModels";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormViewModel = () => {
    const [login, setLogin] = useState<string>("");
    const [loginError, setLoginError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [repetePassword, setRepetePassword] = useState<string>("");
    const [repetePasswordError, setRepetePasswordError] = useState<string>("");


    
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
    } as IRegisterFormViewModel;
}

export default RegisterFormViewModel;