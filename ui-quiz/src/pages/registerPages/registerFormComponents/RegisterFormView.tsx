import SignInButton from "../../../components/buttons/SignInButton/SignInButton";
import Card from "../../../components/cards/Card";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import { IRegisterFormViewModel } from "./IRegisterFormViewModel";
import classes from "./RegisterForm.module.scss";
import { IoMdPersonAdd } from "react-icons/io";
import { registerUser } from "../../../reducers/registrationReducers/asyncActions";
import { useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { registrationErrors } from "../../../reducers/registrationReducers/selectors";
import { registrationClearLoginError } from "../../../reducers/registrationReducers/slice";

const RegisterFormView = (props: RegisterFormViewProps) => {
  const viewModel = props.viewModel;
  const dispatch = useAppDispatch();
  const errors = useSelector(registrationErrors);

  const onSignUpHandler = () => {
      dispatch(registrationClearLoginError);
      dispatch(registerUser(
      { 
        login: viewModel.login, 
        password: viewModel.password,
        repetePassword: viewModel.repetePassword,
      }));
  }

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
          errorMessage={errors.login}
          value={viewModel.login}
          onChange={(event) => viewModel.setLogin(event.target.value)}
        />
      </div>
      <div className="u-margin-bottom-medium">
        <FormInput
          disabled={viewModel.disabled}
          type="password"
          errorMessage={errors.password}
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
          errorMessage={errors.repetePassword}
          value={viewModel.repetePassword}
          onChange={(event) => viewModel.setRepetePassword(event.target.value)}
        />
      </div>

      <div className="u-center-text">
        <SignInButton
          disabled={viewModel.disabled}
          className="button"
          onClick={onSignUpHandler}
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
