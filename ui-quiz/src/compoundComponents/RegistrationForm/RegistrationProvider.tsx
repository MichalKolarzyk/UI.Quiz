import { useState } from "react";
import { IRegistrationState } from "./RegistrationContext";
import useAppNavigation from "../../hooks/useAppNavigation";
import { IRegisterError, IRegisterRequest, IRegisterResponse } from "../../apis/apiQuiz/ApiQuizModels";
import useQuizApi from "../../apis/apiQuiz/useQuizApi";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { useNotifications } from "../Notifications/hooks";
import usePrompt from "../Prompt/hooks";
import { CreateButton } from "../../components/buttons";

const RegistrationProvider = (): IRegistrationState => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [repetePassword, setRepetePassword] = useState("")

  const notify = useNotifications();
  const prompt = usePrompt();
  const nav = useAppNavigation();

  const promptContent = () => {
    return (
        <div>
          <div className="h2 u-color-white">Congratulations! </div>
          <div className="h3 u-color-white u-margin-bottom-big">{`${login} account has been created `}</div>
          <CreateButton onClick={nav.toLoginPage} className="button">
            Continue
          </CreateButton>
        </div>
    );
  }

  const endpoint = useQuizApi<IRegisterRequest, IRegisterResponse, IRegisterError>(
    (request) => ApiQuizInstance.register(request),
    () => prompt.show("User created", promptContent),
    () => notify.addError("User not created")
  );

  const register = () => {
    const request = {
      login: login,
      password: password,
      repetePassword: repetePassword,
    } as IRegisterRequest;

    endpoint.call(request);
  };

  return {
    login,
    setLogin,
    loginError: endpoint.errors.erros?.login,
    password,
    setPassword,
    passwordError: endpoint.errors.erros?.password,
    repetePassword,
    setRepetePassword,
    repetePasswordError: endpoint.errors.erros?.repetePassword,
    goBack: nav.toLoginPage,
    register,
    isLoading: endpoint.isLoading,
  };
};


export default RegistrationProvider;