import { ChangeEvent, useState } from "react";
import useAccountActions from "../../../actions/useAccountActions";
import useUserActions from "../../../actions/useUserActions";
import FormInput from "../../../components/inputs/formInputs/FormInput";


const LoginFormView = () => {

  const accountActions = useAccountActions();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="h3 u-color-white  u-margin-bottom-small">Login to your account</div>
      <div className="card--white">
        <div className="flex--column u-gap-medium">
          <FormInput
            disabled={false}
            value={login}
            errorMessage=""
            onChange={loginChangeHandler}
            placeholder="login"
          />
          <FormInput
            type="password"
            disabled={false}
            value={password}
            errorMessage=""
            onChange={passwordChangeHandler}
            placeholder="password"
          />
          <span className="u-color-dark"></span>
          <div className="u-margin-bottom-small"></div>
          <button
            disabled={false}
            onClick={() => accountActions.loginUser(login, password)}
            className="button"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginFormView;
