import { Navigate, Outlet, useNavigate } from "react-router-dom";
import IUseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import { IUserProfileViewModel } from "./userProfileComponents/IUserProfileViewModel";

const HomePage = (props: HomePageProps) => {
  const navigate = useNavigate();

  const quizApi = props.useQuizApi;
  if(!quizApi.isLogIn){
      return <Navigate to="/login"/>
  }

  return (
    <div className="home-page">
      <header className="header-flat">
        <div className="header-flat__logo-box">
          <div className="heading-secondary">Quiz</div>
        </div>
        <div className="header-flat__center-box">
          <div className="flex--row u-gap-small">
            <button className="button--transparent" onClick={() => navigate("workspace")}>Workspace</button>
            <button className="button--transparent" onClick={quizApi.singOut}>Quiz events</button>
          </div>

        </div>
        <div className="header-flat__left-box">
          <div className="flex--row u-gap-small">
            <button className="button--transparent" onClick={() => navigate("profile")}>Profile</button>
            <button className="button--transparent" onClick={quizApi.singOut}>Sing out</button>
          </div>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export interface HomePageProps {
  useQuizApi: IUseQuizApi;
  userProfileViewModel: IUserProfileViewModel;
}

export default HomePage;
