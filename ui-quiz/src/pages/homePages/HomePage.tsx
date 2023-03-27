import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setToken } from "../../reducers/accountReducers/slice";
import classes from "./HomePage.module.scss";
import useAppNavigation from "../../hooks/useAppNavigation";
import { HeaderPageButton, RoundedButton, TextButton } from "../../components/buttons";

const HomePage = () => {
  const navigate = useAppNavigation();
  const dispatch = useDispatch();

  return (
    <div className={classes.page}>
      <header className={classes.page__header}>
        <div className={classes.page__header__left}>
          <div className="h2">Quiz</div>
        </div>
        <div className={classes.page__header__center}>
          <HeaderPageButton to={navigate.aboutUrl}>About</HeaderPageButton>
          <HeaderPageButton to={navigate.quizzesUrl}>Quizzes</HeaderPageButton>
          <HeaderPageButton to={navigate.sessionsUrl}>Sessions</HeaderPageButton>
          <HeaderPageButton to={navigate.questionsUrl}>Questions</HeaderPageButton>
        </div>
        <div className={classes.page__header__right}>
          <RoundedButton onClick={() => dispatch(setToken(""))}>Sing out</RoundedButton>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HomePage;
