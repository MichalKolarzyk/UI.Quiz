import { ButtonProps } from "../Button/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import classes from "./GoBackButton.module.scss";

const GoBackButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props} className={classes.button}>
      <RiArrowGoBackFill className={classes.icon}/>
    </button>
  );
};

export default GoBackButton;
