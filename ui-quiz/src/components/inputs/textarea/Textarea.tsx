import { IDisabled, IPlaceholder, ISingleValue } from "../../base/types";
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
        //{...props} 
      />
      <ErrorMessage message={props.errorMessage} />
    </div>
  );
};

export interface TextareaProps extends IDisabled, ISingleValue<string>, IPlaceholder {
  errorMessage?: string;
}

export default Textarea;
