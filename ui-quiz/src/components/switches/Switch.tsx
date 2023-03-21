import { useState } from "react";
import classes from "./Switch.module.scss";

const Switch = (props: SwitchProps) => {
  const [state, setState] = useState(props.initialState ?? false);

  const onClickHandler = () => {
    const newState = !state
    setState(newState)
    props.onClick(newState);
  }

  return (
    <div className={classes.box}>
      <div onClick={onClickHandler} className={`${classes.switch} ${state ? classes.on : classes.off}`}>
        <div className={classes.toggle}></div>
      </div>
      <div className={classes.label}>{props.label ?? ""}</div>
    </div>
  );
};

export interface SwitchProps {
  initialState?: boolean;
  label?: string;
  onClick: (newState: boolean) => void
}

export default Switch;
