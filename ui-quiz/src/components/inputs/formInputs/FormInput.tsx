import { IDisabled, IError, ISingleValue } from "../../base/types";
import ErrorMessage from "../../errors";
import classes from "./FormInput.module.scss";

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <input
        className={classes.input}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        disabled={props.disabled}
      />
      <ErrorMessage message={props.errorMessage} />
    </>
  );
};

export interface FormInputProps extends IError, ISingleValue<string>, IDisabled {
  errorMessage?: string;
}

export default FormInput;
