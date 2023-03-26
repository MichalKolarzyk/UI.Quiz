import React from "react";
import { ButtonProps } from "./Button";
import classes from "./Button.module.scss";

const ButtonContainer: React.FC<ButtonProps> = (props) => {
  return <div className={classes.buttonContainer}>{props.children}</div>;
};

export default ButtonContainer;
