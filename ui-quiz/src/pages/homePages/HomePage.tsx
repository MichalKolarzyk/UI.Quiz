import { Navigate, Outlet, useNavigate } from "react-router-dom";
import IUseQuizApi from "../../applicationHooks/useQuizApis/IUseQuizApi";
import PopupCard from "../../components/popups/PopupCard";
import PopupWrapper from "../../components/popups/PopupWrapper";
import SimplePopup from "../../components/popups/SimplePopup";
import { IUserProfileViewModel } from "./userProfileComponents/IUserProfileViewModel";

const HomePage = (props: HomePageProps) => {
  const navigate = useNavigate();

  const quizApi = props.useQuizApi;
  if (!quizApi.isLogIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="home-page">
      <header className="header-flat">
        <div className="header-flat__logo-box">
          <button className="button--transparent" onClick={() => navigate("home")}>
            Home
          </button>
        </div>
        <div className="header-flat__center-box">
          <div className="flex--row u-gap-small">
            <PopupWrapper>
              <button className="button--transparent" onClick={() => navigate("workspaces")}>
                Workflows
              </button>
              <PopupCard>
                <PopupWrapper>
                  <div className="card--white">
                    <button>Hello!!</button>
                  </div>
                  <PopupCard>
                    <div className="card--white">
                      <button>Hello!!</button>
                    </div>
                  </PopupCard>
                </PopupWrapper>
              </PopupCard>
              {/* <SimplePopup items={props.useQuizApi.userProfile?.userProfileWorkspaces.map(w => w.name)}/> */}
            </PopupWrapper>
            <button className="button--transparent" onClick={() => {}}>
              Quiz events
            </button>
          </div>
        </div>
        <div className="header-flat__left-box">
          <div className="flex--row u-gap-small">
            <button className="button--transparent" onClick={() => navigate("profile")}>
              Profile
            </button>
            <button className="button--transparent" onClick={quizApi.singOut}>
              Sing out
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export interface HomePageProps {
  useQuizApi: IUseQuizApi;
  userProfileViewModel: IUserProfileViewModel;
}

export default HomePage;
