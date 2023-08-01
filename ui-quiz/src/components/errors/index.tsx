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
      <span>{props.message}</span>
      <ClearIcon onClick={props.onClear} className={classes.icon} />
    </div>
  );
};

export interface ErrorMessageProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message?: string;
  onClear?: () => void;
}

export default ErrorMessage;
