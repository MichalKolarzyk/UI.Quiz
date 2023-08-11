import { useState } from "react";
import { ILoginFormState } from "./LoginFormContext";
import { useNavigate } from "react-router-dom";
import QuizApiRequests from "../../apis/apiQuiz";
import useToken from "../../apis/utils/useToken";


export const LoginFormProvider = (): ILoginFormState => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const token = useToken();

  const signInRequest = QuizApiRequests.useSignInRequest(
    (data) => token.set(data.token)
  );

  const signIn = () => {
    signInRequest.call({
      login: email,
      password: password,
    })
  };

  const signUp = () => {
    nav("/register");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading: signInRequest.isLoading,
    errorMessage: signInRequest.errorMessage,
    clearError: signInRequest.clearErrors,
    signIn,
    signUp,
  } as ILoginFormState;
};
