import FormInput from "../../../components/inputs/formInputs/FormInput";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";

const RegisterFormView = (props: RegisterFormViewProps) => {
  const viewModel = props.viewModel;

  return (
    <>
      <div className="h3 u-color-white  u-margin-bottom-small">Create your new account! </div>
      <div className="card--white u-margin-bottom-small">
        <div className="flex--column u-gap-medium">
          <FormInput
            disabled={viewModel.disabled}
            placeholder="login"
            errorMessage={viewModel.loginError}
            value={viewModel.login}
            onChange={(event) => viewModel.setLogin(event.target.value)}
          />
          <FormInput
            disabled={viewModel.disabled}
            type="password"
            errorMessage={viewModel.passwordError}
            placeholder="password"
            value={viewModel.password}
            onChange={(event) => viewModel.setPassword(event.target.value)}
          />
          <FormInput
            disabled={viewModel.disabled}
            type="password"
            placeholder="repete password"
            errorMessage={viewModel.repetePasswordError}
            value={viewModel.repetePassword}
            onChange={(event) => viewModel.setRepetePassword(event.target.value)}
          />
          <button
            disabled={viewModel.disabled}
            className="button"
            onClick={() => viewModel.submit(props.onRegistartionSucceed)}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export interface RegisterFormViewProps {
  viewModel: IRegisterFormViewModel;
  onRegistartionSucceed?: () => void;
}

export default RegisterFormView;
