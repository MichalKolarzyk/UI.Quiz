import { useEffect, useRef, useState } from "react";
import { IDisabled, IError, IList, IPlaceholder, ISingleValue } from "../base/types";
import { InputBox } from "../boxes/InputBox";
import { ClearIcon, DownIcon, Icon, IconComponents, UpIcon } from "../icons";
import classes from "./styles.module.scss";
import React from "react";
import { ComponentActionButton, TertiaryButton } from "../buttons";
import { Colors } from "../../scss/colors/types";
import { IconSize } from "../icons/types";

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
  }, [categorySearch, props.items]);

  useEffect(() => {
    if (isListVisible == true) {
      return;
    }
    setCategorySearch("");
  }, [isListVisible]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onIntemClick = (value: string) => {
    setIsListVisible(false);
    props.onChange?.(value);
  };

  const setIsListVisibleToTrue = () => {
    inputRef.current?.focus();
    setIsListVisible(true);
  };

  const itemsView = filteredItems.map((value, index) => (
    <div onMouseDown={() => onIntemClick(value)} className={classes.item}>
      {value}
    </div>
  ));

  const inputValue = isListVisible ? categorySearch : props.value ?? "";

  return (
    <InputBox disabled={props.disabled} error={props.error}>
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
        <ComponentActionButton
          icon={IconComponents.Clear}
          onClick={() => props.onChange?.("")}
          isHidden={isListVisible || !props.value || props.disabled}
        />


        <ComponentActionButton
          icon={IconComponents.Down}
          onClick={() => setIsListVisible(true)}
          isHidden={isListVisible || props.disabled}
        />

        <ComponentActionButton
          icon={IconComponents.Up}
          onClick={() => setIsListVisible(false)}
          isHidden={!isListVisible || props.disabled}
        />
        {isListVisible && (
          <div className={classes.list}>
            {itemsView}
            {filteredItems.length == 0 && <div className={classes.empty}>Not found ...</div>}
          </div>
        )}
      </div>
    </InputBox>
  );
};

export interface DropdownProps extends IPlaceholder, ISingleValue<string>, IError, IDisabled, IList<string> {}
