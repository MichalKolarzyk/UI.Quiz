import { Outlet } from "react-router-dom";
import classes from "./HomePage.module.scss";
import useAppNavigation from "../../compoundComponents/Navigation/useAppNavigation";
import { NavButton, SecondaryButton, TertiaryButton } from "../../components/buttons";
import ReferenceItemsLoader from "../../components/loaders/ReferenceItemsLoader";
import useToken from "../../apis/utils/useToken";
import { Colors } from "../../scss/colors/types";

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
            <NavButton to={navigate.aboutUrl} label="About"/>
            <NavButton to={navigate.quizzesUrl} label="Quizzes"/>
            <NavButton to={navigate.sessionsUrl} label="Sessions"/>
            <NavButton to={navigate.questionsUrl} label="Questions"/>
          </div>
          <div className={classes.page__header__right}>
            <TertiaryButton color={Colors.white} onClick={token.clear} label="Sing out"/>
          </div>
        </header>
        <Outlet />
      </div>
    </ReferenceItemsLoader>
  );
};

export default HomePage;
