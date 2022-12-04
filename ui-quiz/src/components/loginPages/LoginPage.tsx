import { Navigate } from "react-router-dom";
import LoginFormView from "../loginFormComponents/LoginFormView";
import IUseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import ILoginFormViewModel from "../loginFormComponents/ILoginFormViewModel";

const LoginPage = (props: LoginPageProps) => {
  const quizApi = props.useQuizApi;
  const loginFormViewModel = props.loginFormViewModel;

  if (quizApi.isLogIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login">
      <main>
        <div className="vertical-split-right">
          <div className="position__centered">
            <div className="heading-primary--main">Quiz</div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate debitis consequatur ab, fugit et eius
              provident odio, repudiandae quam cum cumque facilis delectus iure maiores incidunt tenetur nulla! Maiores,
              repellendus.
            </div>
          </div>
        </div>
        <div className="vertical-split-left position__box">
          <div className="position__top">
            Login to your account
          </div>
          <div className="position__centered card--white">
            <LoginFormView viewModel={loginFormViewModel} />
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
