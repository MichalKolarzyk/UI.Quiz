import { ErrorComponent, InputComponentProps } from "../base/types";
import { ClearIcon, IconComponents } from "../icons";
import classes from "./styles.module.scss";
import { InputBox } from "../boxes/InputBox";

export const TextInput: React.FC<DropdownProps> = (props) => {
  return (
      <InputBox errorMessage={props.errorMessage} isLoading={props.isLoading} disabled={props.disabled}>
        <div className={classes.box}>
          <input
            disabled={props.disabled}
            type={props.type}
            value={props.value ?? ""}
            onChange={(event) => props.onChange?.(event.target.value)}
            className={classes.input}
            placeholder={props.placeholder}
          />
          {props.value && !props.disabled && <IconComponents.Close onClick={() => props.onChange?.("")} className={classes.icon} />}
        </div>
      </InputBox>
  );
};

export interface DropdownProps extends InputComponentProps, ErrorComponent {
  value?: string | null;
  onChange?: (newValue: string) => void;
}
