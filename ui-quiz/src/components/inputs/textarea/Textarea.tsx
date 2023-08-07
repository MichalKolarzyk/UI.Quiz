import { IDisabled, IError, IPlaceholder, ISingleValue } from "../../base/types";
import ErrorMessage from "../../errors";
import classes from "./Textarea.module.scss";

const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
  const onChangeHandler = (event: any) => {
    props.onChange?.(event.target.value);
  }

  return (
    <div>
      <textarea 
        className={classes.textarea}
        disabled={props.disabled}
        value={props.value}
        onChange={onChangeHandler}
        placeholder={props.placeholder}
      />
      <ErrorMessage message={props.error} />
    </div>
  );
};

export interface TextareaProps extends IDisabled, ISingleValue<string>, IPlaceholder, IError {
}

export default Textarea;
