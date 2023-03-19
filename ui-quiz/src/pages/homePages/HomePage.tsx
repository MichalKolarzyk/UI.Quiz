import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setToken } from "../../reducers/accountReducers/slice";
import classes from "./HomePage.module.scss";
import TextButton from "../../components/buttons/TextButton/TextButton";
import RoundedButton from "../../components/buttons/RoundedButton/RoundedButton";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <div className={classes.header__left}>
          <div className="h3">Quiz</div> 
        </div>
        <div className={classes.header__center}>
          <div className="popup__wrapper">
            <TextButton onClick={() => navigate("/home")}>About</TextButton>
            <div className="popup__box--bottom popup__wrapper">
              
            </div>
          </div>
          <TextButton onClick={() => {}}>Quiz</TextButton>
          <TextButton onClick={() => {}}>Session</TextButton>
          <TextButton onClick={() => {}}>Questions</TextButton>
        </div>
        <div className={classes.header__right}>
          <RoundedButton onClick={() => dispatch(setToken(""))}>Sing out</RoundedButton>
        </div>
      </header>
      <Outlet />
    </div>
  );
};


export default HomePage;
