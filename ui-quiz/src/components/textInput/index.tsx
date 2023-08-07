import { IError, InputComponentProps } from "../base/types";
import { IconComponents } from "../icons";
import classes from "./styles.module.scss";
import { InputBox } from "../boxes/InputBox";
import FlexRow from "../flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../flex/types";

export const TextInput: React.FC<DropdownProps> = (props) => {
  return (
      <InputBox error={props.error} isLoading={props.isLoading} disabled={props.disabled}>
        <FlexRow.Container itemsPosition={RowPositionEnum.left} gap={GapRowEnum.small}>
          <input
            disabled={props.disabled}
            type={props.type}
            value={props.value ?? ""}
            onChange={(event) => props.onChange?.(event.target.value)}
            className={classes.input}
            placeholder={props.placeholder}
          />
          {props.value && !props.disabled && <IconComponents.Close onClick={() => props.onChange?.("")} className={classes.icon} />}
        </FlexRow.Container>
      </InputBox>
  );
};

export interface DropdownProps extends InputComponentProps, IError {
  value?: string | null;
  onChange?: (newValue: string) => void;
}
