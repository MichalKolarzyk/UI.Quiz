import { useState } from "react";
import classes from "./Switch.module.scss";

const Switch = (props: SwitchProps) => {
  const onClickHandler = () => {
    const newState = !props.value
    props?.onChange?.(newState);
  }

  return (
    <div className={classes.box}>
      <div onClick={onClickHandler} className={`${classes.switch} ${props.value ? classes.on : classes.off}`}>
        <div className={classes.toggle}></div>
      </div>
      <div className={classes.label}>{props.label ?? ""}</div>
    </div>
  );
};

export interface SwitchProps {
  label?: string;
  value?: boolean;
  onChange?: (newState: boolean) => void
}

export default Switch;