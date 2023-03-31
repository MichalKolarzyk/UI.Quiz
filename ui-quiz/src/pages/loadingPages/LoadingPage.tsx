import { SpinnerIcon } from "../../components/icons";
import classes from "./LoadingPage.module.scss";
const LoadingPage = () => {
  return (
    <div className={classes.page}>
      <div className={classes.page__prompt}>
        <SpinnerIcon className={classes.page__icon}></SpinnerIcon>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default LoadingPage;
