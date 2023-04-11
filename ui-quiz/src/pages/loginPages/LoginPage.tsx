import { useState, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignInButton, TransparentButton } from "../../components/buttons";
import { accountLogIn } from "../../reducers/accountReducers/asyncActions";
import { selectIsLogIn } from "../../reducers/accountReducers/selectors";
import { useAppDispatch, RootState } from "../../store/store";
import classes from "./LoginPage.module.scss";
import { TextInput } from "../../components/textInput";
import { ErrorMessageBlock } from "../../components/errors";

const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const isLogIn = useSelector(selectIsLogIn);
  const nav = useNavigate();

  const { isLoading, error } = useSelector((state: RootState) => state.account);
  console.log(error);

  useEffect(() => {
    if (isLogIn == true) {
      nav("/home");
    }
  }, [isLogIn]);

  return (
    <div className={classes["login-page"]}>
      <section className={classes["login-page__form"]}>
        <div className="u-margin-bottom-big u-center-text">
          <h1>Quiz</h1>
        </div>

        <div className="u-margin-bottom-big u-center-text">
          <h2>
            Welcome in the <br /> quiz live game{" "}
          </h2>
        </div>
        <div className="u-margin-bottom-medium">
          <TextInput disabled={isLoading} value={login} errorMessage="" onChange={setLogin} placeholder="Email *" />
        </div>
        <div className="u-margin-bottom-medium">
          <TextInput
            type="password"
            disabled={isLoading}
            value={password}
            onChange={setPassword}
            placeholder="Password *"
          />
        </div>

        <div className="u-margin-bottom-medium">
          <ErrorMessageBlock message={error} />
        </div>

        <div className=" u-center-text">
          <SignInButton disabled={isLoading} onClick={() => dispatch(accountLogIn({ login, password }))}>
            Sign in
          </SignInButton>
        </div>

        <div className="u-margin-bottom-small u-center-text">
          <h5>Or</h5>
        </div>

        <div className="u-margin-bottom-small u-center-text">
          <TransparentButton disabled={isLoading} onClick={() => nav("/register")}>
            Sign up
          </TransparentButton>
        </div>
      </section>
      <section className={classes["login-page__description"]}></section>
    </div>
  );
};

export default LoginPage;
