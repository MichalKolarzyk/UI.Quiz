import { ErrorComponent, InputComponentProps } from "../base/types";
import { ClearIcon, DeleteIcon } from "../icons";
import classes from "./styles.module.scss";
import { InputBox } from "../boxes/InputBox";
import { useEffect, useState } from "react";

export const TextInput: React.FC<DropdownProps> = (props) => {
  const [privateValue, setPrivateValue] = useState(props.value ?? "");

  const valueEmpty = privateValue == undefined || privateValue.length == 0;

  useEffect(() => {
    if (props.delay == undefined) {
      props.onChange?.(privateValue);
      return;
    }
    const timeOutId = setTimeout(() => props.onChange?.(privateValue), props.delay);
    return () => clearTimeout(timeOutId);
  }, [privateValue]);

  return (
    <>
      <InputBox errorMessage={props.errorMessage} isLoading={true} disabled={props.disabled}>
        <div className={classes.box}>
          <input
            disabled={props.disabled}
            type={props.type}
            value={privateValue}
            onChange={(event) => setPrivateValue(event.target.value)}
            className={classes.input}
            placeholder={props.placeholder}
          ></input>
          {!valueEmpty && !props.disabled && <ClearIcon onClick={() => setPrivateValue("")} className={classes.icon} />}
        </div>
      </InputBox>
    </>
  );
};

export interface DropdownProps extends InputComponentProps, ErrorComponent {
  value?: string;
  onChange?: (newValue: string) => void;
  delay?: number;
}
