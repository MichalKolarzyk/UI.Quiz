import { useState } from "react";
import { IChildren, IDisabled, IError, ILoading } from "../base/types";
import classes from "./styles.module.scss";
import ErrorMessage from "../errors";
import classNames from "classnames";

export const InputBox: React.FC<InputBoxProps> = (props) => {
  const [boxFocus, setBoxFocus] = useState<boolean>(false);
  const [boxHover, setBoxHover] = useState<boolean>(false);

  const hasError = (props.error?.length ?? 0) > 0

  let boxClass = classNames(classes.box, {
    [classes["box--focus"]] : boxFocus,
    [classes["box--hover"]] : boxHover,
    [classes["box--error"]] : hasError,
    [classes["box--disabled"]] : props.disabled || props.isLoading
  })

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
      <ErrorMessage error={props.error}/>
    </>
  );
};

export interface InputBoxProps extends IDisabled, ILoading, IError, IChildren {
  fullWidth?: boolean
}
