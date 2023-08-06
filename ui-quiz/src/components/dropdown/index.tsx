import { useEffect, useRef, useState } from "react";
import { ErrorComponent, InputComponentProps, SingleValueProps } from "../base/types";
import { InputBox } from "../boxes/InputBox";
import { ClearIcon, DownIcon, UpIcon } from "../icons";
import classes from "./styles.module.scss";
import React from "react";

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [categorySearch, setCategorySearch] = useState<string>();
  const [filteredItems, setFilteredItems] = useState<Array<string>>(props.items ?? []);

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

  const inputRef = useRef<HTMLInputElement>(null);


  const onIntemClick = (value: string) => {
    setIsListVisible(false);
    props.setValue?.(value);
  };

  const setIsListVisibleToTrue = () => {
    inputRef.current?.focus();
    setIsListVisible(true);
  }

  const itemsView = filteredItems.map((value, index) => (
    <div onMouseDown={() => onIntemClick(value)} className={classes.item}>
      {value}
    </div>
  ));

  const inputValue = isListVisible ? categorySearch : props.value ?? "";

  return (
    <>
      <InputBox errorMessage={props.errorMessage}>
        <div onBlur={() => setIsListVisible(false)} className={classes.box}>
          <input
            value={inputValue}
            onChange={(event) => setCategorySearch(event.target.value)}
            onFocus={() => setIsListVisible(true)}
            onBlur={() => setIsListVisible(false)}
            className={classes.input}
            ref={inputRef}
            placeholder={props.placeholder}
          ></input>
          {!isListVisible && props.value && <ClearIcon className={classes.icon} onClick={() => props.setValue?.("")} />}
          {!isListVisible && <DownIcon onClick={setIsListVisibleToTrue} className={classes.icon} />}
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

export interface DropdownProps extends InputComponentProps, SingleValueProps, ErrorComponent {
  items?: Array<string>;
}
