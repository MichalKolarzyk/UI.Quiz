import { useState } from "react";
import { ComponentProps } from "../base/types";
import classes from "./styles.module.scss";

export const InputBox: React.FC<InputBoxProps> = (props) => {
  const [boxFocus, setBoxFocus] = useState<boolean>(false);
  const [boxHover, setBoxHover] = useState<boolean>(false);

  let boxClass = `${classes.box} 
    ${boxFocus && classes["box--focus"]} 
    ${boxHover && classes["box--hover"]} 
    ${props.hasError && classes["box--error"]}`;

  if(props.disabled){
    boxClass=`${classes.box} ${props.disabled && classes["box--disabled"]}`
  }

  return (
    <div
      onFocus={() => setBoxFocus(true)}
      onMouseEnter={() => setBoxHover(true)}
      onMouseLeave={() => setBoxHover(false)}
      onBlur={() => setBoxFocus(false)}
      className={boxClass}
    >
      {props.children}
    </div>
  );
};

export interface InputBoxProps extends ComponentProps {
  hasError?: boolean;
}
