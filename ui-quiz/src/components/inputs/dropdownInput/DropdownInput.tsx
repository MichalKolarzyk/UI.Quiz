import { useState } from "react";
import classes from "./DropdownInput.module.scss";
import { FormInputProps } from "../formInputs/FormInput";
import { IList } from "../../base/types";

const DropdownInput = (props: DropdownInputProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsListVisible(!isListVisible);
  };

  const onIntemClick = (event : any) => {
    props.onChange?.(event);
    setIsListVisible(false);
  };

  const itemsView = props.items?.map((value, index) => (
    <div onMouseDown={onIntemClick} className={classes.item}>
      {value}
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>{props.labelTop}</div>
      <div className={classes.dropdown}>
        <button disabled={props.disabled} onBlur={() => setIsListVisible(false)} onClick={onClickHandler} className={classes.button}>
          {props.value}
        </button>
        <div
          className={`${classes["list-wrapper"]} ${isListVisible && classes["list-wrapper--visible"]}`}
        >
          <div className={classes.list}>{itemsView}</div>
        </div>
      </div>
      <div className={classes["label--bottom"]}>{props.labelBottom}</div>
    </div>
  );
};

export interface DropdownInputProps extends FormInputProps, IList<string> {
  labelTop?: string;
  labelBottom?: string;
}

export default DropdownInput;
