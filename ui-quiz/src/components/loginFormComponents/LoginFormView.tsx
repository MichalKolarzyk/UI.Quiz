import { ChangeEvent } from "react";
import ILoginFormViewModel from "./ILoginFormViewModel";

const LoginFormView = (props: LoginFormViewProps) => {
  const viewModel = props.viewModel;

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    viewModel.setLogin(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    viewModel.setPassword(event.target.value);
  };

  return (
    <div className="flex--column u-gap-medium">
      <input disabled={viewModel.disabled} className="form--input" value={props.viewModel.login} onChange={loginChangeHandler} placeholder="login" />
      <span>{viewModel.loginError}</span>
      <input type="password" disabled={viewModel.disabled} className="form--input" value={props.viewModel.password} onChange={passwordChangeHandler} placeholder="password"/>
      <span>{viewModel.passwordError}</span>
      <span>{viewModel.errorMessage}</span>
      <div className="u-margin-bottom-small"></div>
      <button 
        disabled={viewModel.disabled || !!viewModel.loginError || !!viewModel.passwordError || !!viewModel.errorMessage} 
        onClick={viewModel.submit} className="button">Sign in</button>
    </div>
  );
};

export interface LoginFormViewProps {
  viewModel: ILoginFormViewModel;
}

export default LoginFormView;
