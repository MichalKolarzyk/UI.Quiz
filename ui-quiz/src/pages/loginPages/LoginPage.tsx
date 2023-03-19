import { useState, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInButton from "../../components/buttons/SignInButton/SignInButton";
import TransparentButton from "../../components/buttons/TransparentButton/TransparentButton";
import FormInput from "../../components/inputs/formInputs/FormInput";
import { accountLogIn } from "../../reducers/accountReducers/asyncActions";
import { selectIsLogIn } from "../../reducers/accountReducers/selectors";
import { useAppDispatch, RootState } from "../../store/store";
import classes from "./LoginPage.module.scss";

const LoginPage = () => {
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
    if (isLogIn == true) {
      nav("/home");
    }
  }, [isLogIn]);

  return (
    <div className={classes["login-page"]}>
      <section className={classes["login-page__form"]}>
      <div className="h1 u-margin-bottom-medium u-center-text">Quiz</div>
      <div className="h2 u-margin-bottom-big u-center-text">welcome in the quiz live game </div>
      <div className="u-margin-bottom-medium">
        <FormInput
          disabled={isLoading}
          value={login}
          errorMessage=""
          onChange={loginChangeHandler}
          placeholder="Email *"
        />
      </div>
      <div className="u-margin-bottom-medium">
        <FormInput
          type="password"
          disabled={isLoading}
          value={password}
          errorMessage=""
          onChange={passwordChangeHandler}
          placeholder="Password *"
        />
      </div>

      <span className="u-color-dark"></span>
      <div className="u-margin-bottom-small u-center-text">
        <SignInButton disabled={isLoading} onClick={() => dispatch(accountLogIn({ login, password }))}>
          Sign in
        </SignInButton>
      </div>

      <div className="h3 u-margin-bottom-small u-center-text">Or</div>

      <div className="u-margin-bottom-small u-center-text">
        <TransparentButton disabled={isLoading} onClick={() => nav("/register")}>
          Sign up
        </TransparentButton>
      </div>
      </section>
      <section className={classes["login-page__description"]}>
      </section>
    </div>
  );
};

export default LoginPage;
