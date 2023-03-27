import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePages/HomePage";
import RegisterPage from "../pages/registerPages/RegisterPage";
import RegisterFormViewModel from "../pages/registerPages/registerFormComponents/RegisterFormViewModel";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/loginPages/LoginPage";
import AboutPage from "../pages/aboutPages/AboutPage";
import QuestionsTablePage from "../pages/questionsPages/QuestionsTablePage/QuestionsTablePage";
import QuestionCreatePage from "../pages/questionsPages/QuestionCreatePage/QuestionCreatePage";
import QuestionPage from "../pages/questionsPages/QuestionPage/QuestionPage";

const AppRouter = () => {
  const registerPageViewModel = RegisterFormViewModel();

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
              <HomePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<AboutPage />} />
          <Route path="questions" element={<QuestionsTablePage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="create-question" element={<QuestionCreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
