import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignInButton, TransparentButton } from "../../components/buttons";
import { selectIsLogIn } from "../../reducers/accountReducers/selectors";
import { useAppDispatch } from "../../store/store";
import classes from "./LoginPage.module.scss";
import { TextInput } from "../../components/textInput";
import { ErrorMessageBlock } from "../../components/errors";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { setToken } from "../../reducers/accountReducers/slice";
import useQuizApi from "../../apis/apiQuiz/useQuizApi";
import { ISignInRequest } from "../../apis/apiQuiz/ApiQuizModels";

const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const isLogIn = useSelector(selectIsLogIn);
  const nav = useNavigate();

  useEffect(() => {
    if (isLogIn == true) {
      nav("/home");
    }
  }, [isLogIn]);

  const request = useQuizApi(
    (request: ISignInRequest) => ApiQuizInstance.signIn(request),
    (response) => {
      dispatch(setToken(response.data.token));
    }
  );

  const onSignInClickHandler = () => {
    request.call({
      login: login,
      password: password,
    });
  };

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
          <TextInput
            disabled={request.isLoading}
            value={login}
            errorMessage=""
            onChange={setLogin}
            placeholder="Email *"
          />
        </div>
        <div className="u-margin-bottom-medium">
          <TextInput
            type="password"
            disabled={request.isLoading}
            value={password}
            onChange={setPassword}
            placeholder="Password *"
          />
        </div>

        <div className="u-margin-bottom-medium">
          <ErrorMessageBlock message={request.errors.message} />
        </div>

        <div className=" u-center-text">
          <SignInButton disabled={request.isLoading} onClick={onSignInClickHandler}>
            Sign in
          </SignInButton>
        </div>

        <div className="u-margin-bottom-small u-center-text">
          <h5>Or</h5>
        </div>

        <div className="u-margin-bottom-small u-center-text">
          <TransparentButton disabled={request.isLoading} onClick={() => nav("/register")}>
            Sign up
          </TransparentButton>
        </div>
      </section>
      <section className={classes["login-page__description"]}></section>
    </div>
  );
};

export default LoginPage;
