import LoginFormView from "../loginFormComponents/LoginFormView";
import LoginFormViewModel from "../loginFormComponents/LoginFormViewModel";

const LoginPage = () => {
  const loginFormViewModel = LoginFormViewModel();

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

export default LoginPage;
