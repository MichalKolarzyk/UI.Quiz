import { useNavigate } from "react-router-dom";
import LoginFormView from "./loginFormComponents/LoginFormView";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <section className="login-page__form-section position">
        <div className="position__centered">
          <LoginFormView />
        </div>
      </section>
      <section className="login-page__description-section position">
        <div className="position__centered">
          <div className="h1">Quiz</div>
          <div className="u-margin-bottom-big u-color-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate debitis consequatur ab, fugit et eius
            provident odio, repudiandae quam cum cumque facilis delectus iure maiores incidunt tenetur nulla! Maiores,
            repellendus.
          </div>
          <span className="h3 u-color-white">Are you new here?</span>
          <button className="button button--transparent" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
