import { Icon, IconComponents } from "../../components/icons";
import { IconSize } from "../../components/icons/types";
import classes from "./LoadingPage.module.scss";
const LoadingPage = () => {
  return (
    <div className={classes.page}>
      <div className={classes.page__prompt}>
        <Icon iconComponent={IconComponents.Spinner} size={IconSize.L}></Icon>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default LoadingPage;
