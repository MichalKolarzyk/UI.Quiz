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
      <input className="form--input" value={props.viewModel.login} onChange={loginChangeHandler} placeholder="login" />
      <input className="form--input" value={props.viewModel.password} onChange={passwordChangeHandler} placeholder="password"/>
      <div className="u-margin-bottom-small"></div>
      <button disabled={viewModel.disabled} onClick={viewModel.submit} className="button">Sign in</button>
    </div>
  );
};

export interface LoginFormViewProps {
  viewModel: ILoginFormViewModel;
}

export default LoginFormView;
