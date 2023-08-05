import { useState } from "react";
import { ILoginFormState } from "./LoginFormContext";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import useToken from "../../hooks/useToken";
import { useNavigate } from "react-router-dom";

export const LoginFormProvider = (): ILoginFormState => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const token = useToken();
  const nav = useNavigate();

  const signIn = () => {
    clearError();
    setIsLoading(true);
    ApiQuizInstance.signIn({
      login: email,
      password: password,
    })
      .then((response) => token.set(response.data.token))
      .catch((error) => {
        setError(error.response.data.errors[""]);
        setEmail("");
        setPassword("");
      })
      .finally(() => setIsLoading(false));
  };

  const clearError = () => {
    setError("");
  };

  const signUp = () => {
    nav("/register");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading: isLoading,
    errorMessage: error,
    clearError,
    signIn,
    signUp,
  } as ILoginFormState;
};
