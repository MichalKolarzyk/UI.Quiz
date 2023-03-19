import SignInButton from "../../../components/buttons/SignInButton/SignInButton";
import Card from "../../../components/cards/Card";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";
import classes from './RegisterForm.module.scss'

import { IoMdPersonAdd } from "react-icons/io";

const RegisterFormView = (props: RegisterFormViewProps) => {
  const viewModel = props.viewModel;

  return (
    <Card>
      <div className={classes.header}>
        <IoMdPersonAdd className="u-icon-big" />
        <div className="h2 u-center-text">New user</div>
      </div>

      <div className="u-margin-bottom-medium">
        <FormInput
          disabled={viewModel.disabled}
          placeholder="login"
          errorMessage={viewModel.loginError}
          value={viewModel.login}
          onChange={(event) => viewModel.setLogin(event.target.value)}
        />
      </div>
      <div className="u-margin-bottom-medium">
        <FormInput
          disabled={viewModel.disabled}
          type="password"
          errorMessage={viewModel.passwordError}
          placeholder="password"
          value={viewModel.password}
          onChange={(event) => viewModel.setPassword(event.target.value)}
        />
      </div>

      <div className="u-margin-bottom-big">
        <FormInput
          disabled={viewModel.disabled}
          type="password"
          placeholder="repete password"
          errorMessage={viewModel.repetePasswordError}
          value={viewModel.repetePassword}
          onChange={(event) => viewModel.setRepetePassword(event.target.value)}
        />
      </div>

      <div className="u-center-text">
        <SignInButton
          disabled={viewModel.disabled}
          className="button"
          onClick={() => viewModel.submit(props.onRegistartionSucceed)}
        >
          Sign up!
        </SignInButton>
      </div>
    </Card>
  );
};

export interface RegisterFormViewProps {
  viewModel: IRegisterFormViewModel;
  onRegistartionSucceed?: () => void;
}

export default RegisterFormView;
