import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterFormViewModel } from "./registerFormComponents/IRegisterFormViewModel";
import RegisterFormView from "./registerFormComponents/RegisterFormView";

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
    <div className="register-page position">
      <div className="position__centered ">
        <div className="h3 u-color-white  u-margin-bottom-small">Create your new account! </div>
        <div className="card--white u-margin-bottom-small">
          <RegisterFormView
            viewModel={props.registerFormViewModel}
            onRegistartionSucceed={() => setSucceedRegister(true)}
          />
        </div>
        <span className="h3 u-color-white">Already have account? </span>
        <button onClick={() => navigate("/login")} className="button--transparent">
          Sign in
        </button>
      </div>
    </div>
  );
};

export interface RegisterPageProps {
  registerFormViewModel: IRegisterFormViewModel;
}

export default RegisterPage;
