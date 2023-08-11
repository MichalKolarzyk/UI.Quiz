import { Outlet } from "react-router-dom";
import classes from "./HomePage.module.scss";
import useAppNavigation from "../../compoundComponents/Navigation/useAppNavigation";
import { HeaderPageButton, RoundedButton } from "../../components/buttons";
import ReferenceItemsLoader from "../../components/loaders/ReferenceItemsLoader";
import useToken from "../../apis/utils/useToken";

const HomePage = () => {
  const navigate = useAppNavigation();
  const token = useToken();

  return (
    <ReferenceItemsLoader>
      <div className={classes.page}>
        <header className={classes.page__header}>
          <div className={classes.page__header__left}>
            <h2>Quiz</h2>
          </div>
          <div className={classes.page__header__center}>
            <HeaderPageButton to={navigate.aboutUrl}>About</HeaderPageButton>
            <HeaderPageButton to={navigate.quizzesUrl}>Quizzes</HeaderPageButton>
            <HeaderPageButton to={navigate.sessionsUrl}>Sessions</HeaderPageButton>
            <HeaderPageButton to={navigate.questionsUrl}>Questions</HeaderPageButton>
          </div>
          <div className={classes.page__header__right}>
            <RoundedButton onClick={token.clear}>Sing out</RoundedButton>
          </div>
        </header>
        <Outlet />
      </div>
    </ReferenceItemsLoader>
  );
};

export default HomePage;
