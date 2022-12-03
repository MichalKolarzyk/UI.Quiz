import { Navigate } from "react-router-dom";
import LoginFormView from "../loginFormComponents/LoginFormView";
import IuseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import ILoginFormViewModel from "../loginFormComponents/ILoginFormViewModel";

const LoginPage = (props : LoginPageProps) => {
  const quizApi = props.useQuizApi;
  const loginFormViewModel = props.loginFormViewModel;

  if(quizApi.isLogIn){
      return <Navigate to='/home'/>
  }

  return (
    <div className="login">
      <main>
        <div className="login">
          <div className="login--form-box card--white">
            <LoginFormView viewModel={loginFormViewModel}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export interface LoginPageProps{
  useQuizApi : IuseQuizApi;
  loginFormViewModel : ILoginFormViewModel
}

export default LoginPage;
