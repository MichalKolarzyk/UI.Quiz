import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setToken } from "../../reducers/accountReducers/slice";
import classes from "./HomePage.module.scss";
import useAppNavigation from "../../hooks/useAppNavigation";
import pageClasses from '../scss/page-base.module.scss'
import { RoundedButton, TextButton } from "../../components/buttons";

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
          <div className="popup__wrapper">
            <TextButton onClick={() => navigate.toHomePage()}>About</TextButton>
            <div className="popup__box--bottom popup__wrapper">
              
            </div>
          </div>
          <TextButton>Quiz</TextButton>
          <TextButton>Session</TextButton>
          <TextButton onClick={() => navigate.toQuestionsPage()}>Questions</TextButton>
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
