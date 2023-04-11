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
import { SignInButton } from "../../../components/buttons";
import { TextInput } from "../../../components/textInput";

const RegisterFormView = (props: RegisterFormViewProps) => {
  const viewModel = props.viewModel;
  const dispatch = useAppDispatch();
  const errors = useSelector(registrationErrors);

  const onSignUpHandler = () => {
    dispatch(registrationClearLoginError);
    dispatch(
      registerUser({
        login: viewModel.login,
        password: viewModel.password,
        repetePassword: viewModel.repetePassword,
      })
    );
  };

  return (
    <Card>
      <div className={classes.header}>
        <IoMdPersonAdd className="u-icon-big" />
        <div className="u-center-text">
          <h2>New user</h2>
        </div>
      </div>

      <div className="u-margin-bottom-medium">
        <TextInput
          disabled={viewModel.disabled}
          placeholder="login"
          errorMessage={errors.login}
          value={viewModel.login}
          onChange={(value) => viewModel.setLogin(value)}
        />
      </div>
      <div className="u-margin-bottom-medium">
        <TextInput
          disabled={viewModel.disabled}
          type="password"
          errorMessage={errors.password}
          placeholder="password"
          value={viewModel.password}
          onChange={(value) => viewModel.setPassword(value)}
        />
      </div>

      <div className="u-margin-bottom-big">
        <TextInput
          disabled={viewModel.disabled}
          type="password"
          placeholder="repete password"
          errorMessage={errors.repetePassword}
          value={viewModel.repetePassword}
          onChange={(value) => viewModel.setRepetePassword(value)}
        />
      </div>

      <div className="u-center-text">
        <SignInButton disabled={viewModel.disabled} onClick={onSignUpHandler}>
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
