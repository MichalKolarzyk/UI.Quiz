import FlexRow from "../flex/FlexRow";
import { ClearIcon } from "../icons";
import classes from "./ErrorMessage.module.scss";

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
    <div className={classes["error-block"]}>
      <FlexRow.Container>
        <FlexRow.Item>
          <span>{props.message}</span>
        </FlexRow.Item>

        <ClearIcon onClick={props.onClear} className={classes.icon} />
      </FlexRow.Container>
    </div>
  );
};

export interface ErrorMessageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message?: string;
  onClear?: () => void;
}

export default ErrorMessage;
