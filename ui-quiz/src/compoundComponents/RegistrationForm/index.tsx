import { useContext } from "react";
import RegistrationContext from "./RegistrationContext";
import { ButtonDark, TextButton } from "../../components/buttons";
import RegistrationProvider from "./RegistrationProvider";
import { TextInput } from "../../components/textInput";

const Form = (props: any) => {
  return (
    <RegistrationContext.Provider value={RegistrationProvider()}>
        <div>{props.children}</div>
    </RegistrationContext.Provider>
  );
};

const GoBack = () => {
  const context = useContext(RegistrationContext);
  return <TextButton onClick={context.goBack}>Go back to login page</TextButton>;
};

const Login = () => {
  const context = useContext(RegistrationContext);
  return (
    <TextInput
      disabled={context.isLoading}
      placeholder="login"
      error={context.loginError}
      value={context.login}
      onChange={(value) => context.setLogin(value)}
    />
  );
};

const Password = () => {
  const context = useContext(RegistrationContext);
  return (
    <TextInput
      disabled={context.isLoading}
      type="password"
      error={context.passwordError}
      placeholder="password"
      value={context.password}
      onChange={(value) => context.setPassword(value)}
    />
  );
};

const RepetePassword = () => {
  const context = useContext(RegistrationContext);
  return (
    <TextInput
      disabled={context.isLoading}
      type="password"
      placeholder="repete password"
      error={context.repetePasswordError}
      value={context.repetePassword}
      onChange={(value) => context.setRepetePassword(value)}
    />
  );
};

const SignUp = () => {
  const context = useContext(RegistrationContext);
  return (
    <ButtonDark disabled={context.isLoading} onClick={context.register}>
      Sign up!
    </ButtonDark>
  );
};

const RegisterForm = {
  Form,
  Login,
  Password,
  RepetePassword,
  SignUp,
  GoBack,
};

export default RegisterForm;
