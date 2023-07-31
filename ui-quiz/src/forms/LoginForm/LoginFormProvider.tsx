import { useState } from "react";
import { ILoginFormState } from "./LoginFormContext";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import useQuizApi from "../../apis/apiQuiz/useQuizApi";
import { ISignInRequest } from "../../apis/apiQuiz/ApiQuizModels";
import useToken from "../../hooks/useToken";
import { useNavigate } from "react-router-dom";

export const LoginFormProvider = (): ILoginFormState => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useToken();
  const nav = useNavigate();

  const request = useQuizApi(
    (request: ISignInRequest) => ApiQuizInstance.signIn(request),
    (response) => {
      token.set(response.data.token);
    }
  );

  const signIn = () => {
    request.call({
      login: email,
      password: password,
    });
  };

  const signUp = () => {
    nav("/register")
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading: request.isLoading,
    errorMessage: request.errors.message,
    signIn,
    signUp,
  } as ILoginFormState;
};
