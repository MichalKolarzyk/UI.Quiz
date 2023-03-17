import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useQuizApi from "../applicationHooks/useQuizApis/useQuizApi";
import HomePage from "../pages/homePages/HomePage";
import UserProfileViewModel from "../pages/homePages/userProfileComponents/UserProfileViewModel";
import UserProfileView from "../pages/homePages/userProfileComponents/UserProfileView";
import RegisterPage from "../pages/registerPages/RegisterPage";
import RegisterFormViewModel from "../pages/registerPages/registerFormComponents/RegisterFormViewModel";
import UserWorkflowsViewModel from "../pages/homePages/userWorkflowsComponents/UserWorkflowsViewModel";
import WorkspaceTablePage from "../pages/workspaceTablePages/WorkspacTablePage";
import WorkspacePage from "../pages/workspacePages/WorkspacePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/loginPages/LoginPage";

const AppRouter = () => {
  const quizApi = useQuizApi();
  const userProfileViewModel = UserProfileViewModel({ useQuizApi: quizApi });
  const registerPageViewModel = RegisterFormViewModel({ useQuizApi: quizApi });
  const userWorkflowsViewModel = UserWorkflowsViewModel({ useQuizApi: quizApi });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage registerFormViewModel={registerPageViewModel} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage userProfileViewModel={userProfileViewModel} userWorkflowsViewModel={userWorkflowsViewModel} />
            </ProtectedRoute>
          }
        >
          <Route path=":workspaceId" element={<WorkspacePage />} />
          <Route path="profile" element={<UserProfileView />} />
          <Route path="workspaces" element={<WorkspaceTablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
