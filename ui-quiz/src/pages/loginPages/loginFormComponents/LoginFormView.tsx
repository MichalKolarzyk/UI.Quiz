import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/inputs/formInputs/FormInput";
import { accountLogIn } from "../../../reducers/accountReducers/asyncActions";
import { selectIsLogIn } from "../../../reducers/accountReducers/selectors";
import { RootState, useAppDispatch } from "../../../store/store";


const LoginFormView = () => {

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const isLogIn = useSelector(selectIsLogIn);
  const nav = useNavigate();

  const isLoading = useSelector((state: RootState) => state.account.isLoading);

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if(isLogIn == true){
      nav("/home");
    }
  }, [isLogIn])

  return (
    <>
      <div className="h3 u-color-white  u-margin-bottom-small">Login to your account</div>
      <div className="card--white">
        <div className="flex--column u-gap-medium">
          <FormInput
            disabled={isLoading}
            value={login}
            errorMessage=""
            onChange={loginChangeHandler}
            placeholder="login"
          />
          <FormInput
            type="password"
            disabled={isLoading}
            value={password}
            errorMessage=""
            onChange={passwordChangeHandler}
            placeholder="password"
          />
          <span className="u-color-dark"></span>
          <div className="u-margin-bottom-small"></div>
          <button
            disabled={isLoading}
            onClick={() => dispatch(accountLogIn({login, password}))}
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
