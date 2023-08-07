import { useState } from "react";
import { ComponentProps, IError } from "../base/types";
import classes from "./styles.module.scss";
import ErrorMessage from "../errors";

export const InputBox: React.FC<InputBoxProps> = (props) => {
  const [boxFocus, setBoxFocus] = useState<boolean>(false);
  const [boxHover, setBoxHover] = useState<boolean>(false);

  const hasError = (props.error?.length ?? 0) > 0

  let boxClass = `${classes.box} ${boxFocus ? classes["box--focus"] : ""} ${boxHover ? classes["box--hover"] : ""} ${hasError ? classes["box--error"]: ""}`;

  if (props.disabled || props.isLoading) {
    boxClass = `${classes.box} ${classes["box--disabled"]}`;
  }

  return (
    <>
      <div
        onFocus={() => setBoxFocus(true)}
        onMouseEnter={() => setBoxHover(true)}
        onMouseLeave={() => setBoxHover(false)}
        onBlur={() => setBoxFocus(false)}
        className={boxClass}
        style={{width: props.fullWidth ? "100%" : ""}}
      >
        {props.children}
      </div>
      <ErrorMessage message={props.error} />
    </>
  );
};

export interface InputBoxProps extends ComponentProps, IError {
  fullWidth?: boolean
}
