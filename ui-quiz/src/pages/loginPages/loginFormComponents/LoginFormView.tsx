import { ChangeEvent } from "react";
import FormInput from "../../../components/inputs/formInputs/FormInput";
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
    <>
      <div className="h3 u-color-white  u-margin-bottom-small">Login to your account</div>
      <div className="card--white">
        <div className="flex--column u-gap-medium">
          <FormInput
            disabled={viewModel.disabled}
            value={props.viewModel.login}
            errorMessage={viewModel.loginError}
            onChange={loginChangeHandler}
            placeholder="login"
          />
          <FormInput
            type="password"
            disabled={viewModel.disabled}
            value={props.viewModel.password}
            errorMessage={viewModel.passwordError}
            onChange={passwordChangeHandler}
            placeholder="password"
          />
          <span className="u-color-dark">{viewModel.errorMessage}</span>
          <div className="u-margin-bottom-small"></div>
          <button
            disabled={
              viewModel.disabled || !!viewModel.loginError || !!viewModel.passwordError || !!viewModel.errorMessage
            }
            onClick={viewModel.submit}
            className="button"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export interface LoginFormViewProps {
  viewModel: ILoginFormViewModel;
}

export default LoginFormView;
