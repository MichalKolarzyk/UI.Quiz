import { useState } from "react";
import IuseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import { IErrorResponse } from "../../infrastructure/apiQuiz/ApiQuizModels";
import ILoginFormViewModel from "./ILoginFormViewModel";

const LoginFormViewModel = (props: LoginFormViewModelProps) => {
  const quizApi = props.useQuizApi;
  const [login, setLoginInternal] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [password, setPasswordInternal] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submit = () => {
    quizApi.signIn({ login, password }, onSubmitResponse, onSubmitError, onSubmitFinally);
  };

  const onSubmitResponse = () => {
    setLoginInternal("");
    setPasswordInternal("");
  }

  const onSubmitError = (error: IErrorResponse) => {
    console.log(error);
    setLoginError(error.errors.Login);
    setPasswordError(error.errors.Password);
    setErrorMessage(error.errors.ErrorMessage);
  };

  const onSubmitFinally = () => {

  };

  const setLogin = (value: string) => {
    setLoginError("");
    setLoginInternal(value);
    setErrorMessage("");
  };

  const setPassword = (value: string) => {
    setPasswordError("");
    setPasswordInternal(value);
    setErrorMessage("");
  };

  return {
    login,
    loginError,
    setLogin,
    password,
    passwordError,
    setPassword,
    errorMessage,
    disabled: quizApi.isBusy,
    submit,
  } as ILoginFormViewModel;
};

export interface LoginFormViewModelProps {
  useQuizApi: IuseQuizApi;
}

export default LoginFormViewModel;
