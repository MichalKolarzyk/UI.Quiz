import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.scss";
import LoginForm from "../../compoundComponents/LoginForm";
import useToken from "../../hooks/useToken";

const LoginPage = () => {
  const token = useToken();
  const nav = useNavigate();

  useEffect(() => {
    if (token.isActive()) {
      nav("/home");
    }
  }, [token.get()]);

  return (
    <div className={classes["login-page"]}>
      <section className={classes["login-page__form"]}>
        <div className="u-margin-bottom-medium u-center-text">
          <h1>Quiz</h1>
        </div>
        <div className="u-margin-bottom-big u-center-text">
          <h2>
            Welcome in the <br /> quiz live game{" "}
          </h2>
        </div>
        <LoginForm.Form>
          <div className="u-margin-bottom-medium">
            <LoginForm.EmailInput />
          </div>
          <div className="u-margin-bottom-medium">
            <LoginForm.PasswordInput />
          </div>

          <div className="u-margin-bottom-medium">
            <LoginForm.ErrorMessage />
          </div>

          <div className="u-margin-bottom-small u-center-text">
            <LoginForm.SignInButton />
          </div>

          <div className="u-margin-bottom-small u-center-text">
            <h5>Or</h5>
          </div>

          <div className="u-margin-bottom-small u-center-text">
            <LoginForm.SignUpButton />
          </div>
        </LoginForm.Form>
      </section>
      <section className={classes["login-page__description"]}></section>
    </div>
  );
};

export default LoginPage;
