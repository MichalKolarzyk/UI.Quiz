import { BackgroundColors } from "../../scss/backgroundColors/types";
import { Colors } from "../../scss/colors/types";
import { TertiaryButton } from "../buttons";
import { Card } from "../cards";
import FlexRow from "../flex/FlexRow";
import { RowPositionEnum } from "../flex/types";
import { IconComponents } from "../icons";
import { Label } from "../labels";
import classes from "./ErrorMessage.module.scss";
import { ErrorMessageProps } from "./types";

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  if (props.error == undefined) {
    return <></>;
  }
  return <div className={classes.error}>{props.error}</div>;
};

export const ErrorMessageBlock: React.FC<ErrorMessageProps> = (props) => {
  if (props.error == undefined || props.error == "") {
    return <></>;
  }
  return (
    <Card backgroundColor={BackgroundColors.error}>
      <FlexRow.Container itemsPosition={RowPositionEnum.spaceBetween}>
        <Label color={Colors.error} text={props.error}/>
        <TertiaryButton icon={IconComponents.Close} color={Colors.white} onClick={props.onClear}/>
      </FlexRow.Container>
    </Card>
  );
};

export default ErrorMessage;
