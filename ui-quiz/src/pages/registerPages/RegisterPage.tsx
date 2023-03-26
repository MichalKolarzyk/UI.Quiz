import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextButton } from "../../components/buttons";
import { IRegisterFormViewModel } from "./registerFormComponents/IRegisterFormViewModel";
import RegisterFormView from "./registerFormComponents/RegisterFormView";
import classes from "./RegisterPage.module.scss";

const RegisterPage = (props: RegisterPageProps) => {
  const navigate = useNavigate();
  const [succeedRegister, setSucceedRegister] = useState<Boolean>(false);

  if (succeedRegister) {
    return (
      <div className="register-page position">
        <div className="position__centered">
          <div className="h2 u-color-white">Congratulations! </div>
          <div className="h3 u-color-white u-margin-bottom-big">Your new account has been created </div>
          <button onClick={() => navigate("/login")} className="button">
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.page}>
      <div className={classes.desctiption}>
        <div className="h1 u-center-text u-margin-bottom-big">Sign in</div>
        <div className="h2 u-center-text u-margin-bottom-big">welcome in the first game for</div>
        <div className="u-center-text">
          <TextButton onClick={() => navigate("/login")}>
            Go back to login page
          </TextButton>
        </div>
      </div>
      <div className={classes["form-section"]}>
        <div className={classes["form-section__box"]}>
          <RegisterFormView
            viewModel={props.registerFormViewModel}
            onRegistartionSucceed={() => setSucceedRegister(true)}
          />
        </div>
      </div>
    </div>
  );
};

export interface RegisterPageProps {
  registerFormViewModel: IRegisterFormViewModel;
}

export default RegisterPage;
