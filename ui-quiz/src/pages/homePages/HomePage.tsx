import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAccountActions from "../../actions/useAccountActions";
import useUserActions from "../../actions/useUserActions";
import { IUserProfileViewModel } from "./userProfileComponents/IUserProfileViewModel";
import IUserWorkflowsViewModel from "./userWorkflowsComponents/IUserWorkflowsViewModel";
import UserWorkflowsView from "./userWorkflowsComponents/UserWorkflowsView";

const HomePage = (props: HomePageProps) => {
  const navigate = useNavigate();
  const userActions = useUserActions()

  const accountActions = useAccountActions();

  useEffect(() => {
    userActions.fetchUser();
  }, [])

  return (
    <div className="home-page">
      <header className="header-flat">
        <div className="header-flat__logo-box">
          <button className="button button--transparent" onClick={() => navigate("/home")}>
            Home
          </button>
        </div>
        <div className="header-flat__center-box">
          <div className="flex--row u-gap-small">
            <div className="popup__wrapper">
              <button className="button button--transparent" onClick={() => navigate("workspaces")}>
                Workflows
              </button>
              <div className="popup__box--bottom popup__wrapper">
                <UserWorkflowsView onWorkspaceClick={(w) => navigate(w.workspaceId)} viewModel={props.userWorkflowsViewModel}/>
              </div>
            </div>
            <button className="button button--transparent" onClick={() => {}}>
              Quiz events
            </button>
          </div>
        </div>
        <div className="header-flat__left-box">
          <div className="flex--row u-gap-small">
            <button className="button button--transparent" onClick={() => navigate("profile")}>
              Profile
            </button>
            <button className="button button--transparent" onClick={() => accountActions.signOut()}>
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
  userProfileViewModel: IUserProfileViewModel;
  userWorkflowsViewModel: IUserWorkflowsViewModel;
}

export default HomePage;
