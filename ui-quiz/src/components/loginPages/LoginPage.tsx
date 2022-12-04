import { Navigate, useNavigate } from "react-router-dom";
import LoginFormView from "../loginFormComponents/LoginFormView";
import IUseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import ILoginFormViewModel from "../loginFormComponents/ILoginFormViewModel";

const LoginPage = (props: LoginPageProps) => {
  const quizApi = props.useQuizApi;
  const loginFormViewModel = props.loginFormViewModel;
  const navigate = useNavigate();

  if (quizApi.isLogIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-page">
      <main>
        <div className="vertical-split-right u-background-color-secondary">
          <div className="position__centered">
            <div className="heading-primary--main">Quiz</div>
            <div className="u-margin-bottom-big">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate debitis consequatur ab, fugit et eius
              provident odio, repudiandae quam cum cumque facilis delectus iure maiores incidunt tenetur nulla! Maiores,
              repellendus.
            </div>
            <span className="heading-tertiary">Are you new here?</span>
            <button className="button--transparent" onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>
        <div className="vertical-split-left position__box">
          <div className="position__centered">
            <div className="heading-tertiary">Login to your account</div>
            <div className="card--white">
              <LoginFormView viewModel={loginFormViewModel} />
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export interface LoginPageProps {
  useQuizApi: IUseQuizApi;
  loginFormViewModel: ILoginFormViewModel;
}

export default LoginPage;
