import { useEffect, useState } from "react";
import { InputComponentProps, SingleValueProps } from "../base/types";
import { InputBox } from "../boxes/InputBox";
import { AddIcon, ClearIcon, DownIcon, UpIcon } from "../icons";
import classes from "./styles.module.scss";

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [categorySearch, setCategorySearch] = useState<string>();
  const [filteredItems, setFilteredItems] = useState<Array<string>>(props.items ?? []);

  const onIntemClick = (value: string) => {
    setIsListVisible(false);
    props.setValue?.(value);
  };

  const itemsView = filteredItems.map((value, index) => (
    <div onMouseDown={() => onIntemClick(value)} className={classes.item}>
      {value}
    </div>
  ));

  useEffect(() => {
    let newFilterdItems = Array<string>();
    if (categorySearch == undefined || categorySearch == "") {
      newFilterdItems = props.items ?? [];
    }
    newFilterdItems = props.items?.filter((i) => i.startsWith(categorySearch ?? "")) ?? [];
    setFilteredItems([...newFilterdItems]);
  }, [categorySearch,props.items]);

  useEffect(() => {
    if (isListVisible == true) {
      return;
    }
    setCategorySearch("");
  }, [isListVisible]);

  const inputValue = isListVisible ? categorySearch : props.value ?? "";

  return (
    <>
      <InputBox>
        <div onBlur={() => setIsListVisible(false)} className={classes.box}>
          <input
            value={inputValue}
            onChange={(event) => setCategorySearch(event.target.value)}
            onFocus={() => setIsListVisible(true)}
            onBlur={() => setIsListVisible(false)}
            className={classes.input}
            placeholder={props.placeholder}
          ></input>
          {!isListVisible && props.value && <ClearIcon className={classes.icon} onClick={() => props.setValue?.("")} />}
          {isListVisible && <UpIcon onClick={() => setIsListVisible(false)} className={classes.icon} />}
          {isListVisible && <div className={classes.list}>
            {itemsView}
            {filteredItems.length == 0 && <div className={classes.empty}>Not found ...</div>}
          </div>}
        </div>
      </InputBox>
    </>
  );
};

export interface DropdownProps extends InputComponentProps, SingleValueProps {
  items?: Array<string>;
}
