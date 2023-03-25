import { useState } from "react";
import classes from "./DropdownInput.module.scss";

const DropdownInput = (props: DropdownInputProps) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsListVisible(!isListVisible);
  };

  const onIntemClick = (value: string, index: number) => {
    props.onChange?.(value, index);
    setIsListVisible(false);
  };

  const itemsView = props.items.map((value, index) => (
    <div onMouseDown={() => onIntemClick(value, index)} className={classes.item}>
      {value}
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.label}>{props.labelTop}</div>
      <div className={classes.dropdown}>
        <button onBlur={() => setIsListVisible(false)} onClick={onClickHandler} className={classes.button}>
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

export interface DropdownInputProps {
  onChange?: (value: string, index: number) => void;
  value?: string,
  items: Array<string>;
  labelTop?: string;
  labelBottom?: string;
}

export default DropdownInput;
