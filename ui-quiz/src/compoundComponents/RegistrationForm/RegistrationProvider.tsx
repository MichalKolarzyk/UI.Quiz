import { useState } from "react";
import { IRegistrationState } from "./RegistrationContext";
import useAppNavigation from "../Navigation/useAppNavigation";
import { useNotifications } from "../Notifications/hooks";
import usePrompt from "../Prompt/hooks";
import { CreateButton } from "../../components/buttons";
import QuizApiRequests from "../../apis/apiQuiz";

const RegistrationProvider = (): IRegistrationState => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repetePassword, setRepetePassword] = useState("");

  const notify = useNotifications();
  const prompt = usePrompt();
  const nav = useAppNavigation();

  const promptContent = () => {
    const onClick = () => {
      nav.toLoginPage();
      prompt.hide();
    };
    return (
      <div>
        <div className="h2 u-color-white">Congratulations! </div>
        <div className="h3 u-color-white u-margin-bottom-big">{`${login} account has been created `}</div>
        <CreateButton onClick={onClick} className="button">
          Continue
        </CreateButton>
      </div>
    );
  };

  const registerRequest = QuizApiRequests.useRegisterUser(
    () => prompt.show("User created", promptContent),
    () => notify.addError("User not created")
  )

  const register = () => {
    registerRequest.call({
      login: login,
      password: password,
      repetePassword: repetePassword,
    });
  };

  return {
    login,
    setLogin,
    loginError: registerRequest.fieldErrors?.login,
    password,
    setPassword,
    passwordError: registerRequest.fieldErrors?.password,
    repetePassword,
    setRepetePassword,
    repetePasswordError: registerRequest.fieldErrors?.repetePassword,
    goBack: nav.toLoginPage,
    register,
    isLoading: registerRequest.isLoading,
  };
};

export default RegistrationProvider;
