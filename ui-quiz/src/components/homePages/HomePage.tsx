import { Navigate } from "react-router-dom";
import IuseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";

const HomePage = (props: HomePageProps) => {
  const quizApi = props.useQuizApi;
  if(!quizApi.isLogIn){
      return <Navigate to="/login"/>
  }

  return (
    <div className="home-page">
      <header className="header-flat">
        <div className="header-flat__logo-box">
          <div className="heading-primary--main">Quiz</div>
        </div>
        <div className="header-flat__center-box">
          <div className="flex--row u-gap-small">
            <button className="button--transparent" onClick={quizApi.singOut}>Workspace</button>
            <button className="button--transparent" onClick={quizApi.singOut}>Quiz events</button>
          </div>

        </div>
        <div className="header-flat__left-box">
          <div className="flex--row u-gap-small">
            <button className="button--transparent" onClick={quizApi.singOut}>Profile</button>
            <button className="button--transparent" onClick={quizApi.singOut}>SingOut</button>
          </div>
        </div>
      </header>
      <main>

      </main>
    </div>
  );
};

export interface HomePageProps {
  useQuizApi: IuseQuizApi;
}

export default HomePage;