import { useState } from "react";
import { ComponentProps as ComponentProps, InputComponentProps } from "../base/types";
import ErrorMessage from "../errors/ErrorMessage";
import { ClearIcon, DeleteIcon } from "../icons";
import classes from "./styles.module.scss";
import { InputBox } from "../boxes/InputBox";

export const TextInput: React.FC<DropdownProps> = (props) => {
  const valueEmpty = props.value == undefined || props.value.length == 0;
  const hasError = (props.errorMessage?.length ?? 0) > 0

  return (
    <>
      <InputBox isLoading={true} disabled={props.disabled} hasError={hasError}>
        <input
          disabled={props.disabled}
          type={props.type}
          value={props.value}
          onChange={(event) => props.onChange?.(event.target.value)}
          className={classes.input}
        ></input>
        {valueEmpty && <div className={classes.placeholder}>{props.placeholder}</div>}
        {!valueEmpty && !props.disabled && <ClearIcon onClick={() => props.onChange?.("")} className={classes.icon} />}
      </InputBox>
      <ErrorMessage message={props.errorMessage} />
    </>
  );
};

export interface DropdownProps extends InputComponentProps {
  value?: string;
  onChange?: (newValue: string) => void;
}
