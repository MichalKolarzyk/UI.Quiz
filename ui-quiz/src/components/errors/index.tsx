import { EmptyButton } from "../buttons";
import { RedCard } from "../cards";
import FlexRow from "../flex/FlexRow";
import { RowPositionEnum } from "../flex/types";
import { Icon, IconComponents } from "../icons";
import { IconSize } from "../icons/types";
import { Label } from "../labels";
import classes from "./ErrorMessage.module.scss";
import { ErrorMessageProps } from "./types";

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  if (props.message == undefined) {
    return <></>;
  }
  return <div className={classes.error}>{props.message}</div>;
};

export const ErrorMessageBlock: React.FC<ErrorMessageProps> = (props) => {
  if (props.message == undefined || props.message == "") {
    return <></>;
  }
  return (
    <RedCard>
      <FlexRow.Container itemsPosition={RowPositionEnum.spaceBetween}>
        <Label text={props.message}/>
        <EmptyButton onClick={props.onClear}>
          <Icon iconComponent={IconComponents.Close} size={IconSize.M}/>
        </EmptyButton>
      </FlexRow.Container>
    </RedCard>
  );
};

export default ErrorMessage;
