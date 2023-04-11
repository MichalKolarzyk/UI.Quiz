import { useState } from "react";
import classes from "./Switch.module.scss";
import { CheckIcon } from "../icons";

const Switch = (props: SwitchProps) => {
  const onClickHandler = () => {
    const newState = !props.value
    props?.onChange?.(newState);
  }

  return (
    <div className={classes.box}>
      <button disabled={props.disabled} onClick={onClickHandler} className={`${classes.switch} ${props.value ? classes.on : classes.off}`}>
        {props.value && <CheckIcon className={classes["check-icon"]}/>}
        <div className={classes.toggle}></div>
      </button>
      <div className={classes.label}>{props.label ?? ""}</div>
    </div>
  );
};

export interface SwitchProps {
  label?: string;
  value?: boolean | null;
  onChange?: (newState: boolean) => void;
  disabled?: boolean
}

export default Switch;
