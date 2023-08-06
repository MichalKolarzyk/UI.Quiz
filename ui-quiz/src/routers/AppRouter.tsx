import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "../pages/homePages/HomePage";
import RegisterPage from "../pages/registerPages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/loginPages/LoginPage";
import AboutPage from "../pages/aboutPages/AboutPage";
import QuestionsTablePage from "../pages/questionsPages/QuestionsTablePage/QuestionsTablePage";
import QuestionCreatePage from "../pages/questionsPages/QuestionCreatePage/QuestionCreatePage";
import QuestionPage from "../pages/questionsPages/QuestionPage/QuestionPage";
import QuizTablePage from "../pages/quizzesPages/QuizzesTablePage";
import SessionsTablePage from "../pages/sessionsPages/SessionsTablePage";
import CreateQuizPage from "../pages/createQuizPages/CreateQuizPage";
import QuizPage from "../pages/quizPages/QuizPage";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<AboutPage />} />
          <Route path="quizzes" element={<QuizTablePage />} />
          <Route path="quizzes/:quizId" element={<QuizPage />} />
          <Route path="create-quiz" element={<CreateQuizPage />} />
          <Route path="sessions" element={<SessionsTablePage />} />
          <Route path="questions" element={<QuestionsTablePage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="create-question" element={<QuestionCreatePage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}/>;
};

export default AppRouter;
