import { useContext } from "react";
import RegistrationContext from "./RegistrationContext";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import RegistrationProvider from "./RegistrationProvider";
import { TextInput } from "../../components/inputs/textInput";

const Form = (props: any) => {
  return (
    <RegistrationContext.Provider value={RegistrationProvider()}>
        <div>{props.children}</div>
    </RegistrationContext.Provider>
  );
};

const GoBack = () => {
  const context = useContext(RegistrationContext);
  return <SecondaryButton onClick={context.goBack} label="Go back to login page"/>;
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
    <PrimaryButton disabled={context.isLoading} onClick={context.register} label="Sign up!"/>
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
