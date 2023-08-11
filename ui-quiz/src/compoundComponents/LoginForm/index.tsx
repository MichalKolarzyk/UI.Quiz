import { useContext } from "react";
import { LoginFormContext } from "./LoginFormContext";
import { LoginFormProvider } from "./LoginFormProvider";
import { TextInput } from "../../components/inputs/textInput";
import { ButtonDark, TransparentButton } from "../../components/buttons";
import { ErrorMessageBlock } from "../../components/errors";

const Form = (props: any) => {
  return (
    <LoginFormContext.Provider value={LoginFormProvider()}>
      <div>{props.children}</div>
    </LoginFormContext.Provider>
  );
};

const EmailInput = () => {
  const context = useContext(LoginFormContext);
  return (
    <TextInput disabled={context.isLoading} value={context.email} onChange={context.setEmail} placeholder="Email *" />
  );
};

const PasswordInput = () => {
  const context = useContext(LoginFormContext);
  return (
    <TextInput
      type="password"
      disabled={context.isLoading}
      value={context.password}
      onChange={context.setPassword}
      placeholder="Password *"
    />
  );
};

const SignInButton = () => {
  const context = useContext(LoginFormContext);
  return (
    <ButtonDark disabled={context.isLoading} onClick={context.signIn}>
      Sign in
    </ButtonDark>
  );
};

const SignUpButton = () => {
  const context = useContext(LoginFormContext);
  return (
    <TransparentButton disabled={context.isLoading} onClick={context.signUp}>
      Sign up
    </TransparentButton>
  );
};

const ErrorMessage = () => {
  const context = useContext(LoginFormContext);
  return <ErrorMessageBlock onClear={context.clearError} error={context.errorMessage} />;
};

const LoginForm = {
  Form,
  EmailInput,
  PasswordInput,
  SignInButton,
  SignUpButton,
  ErrorMessage,
};

export default LoginForm;
