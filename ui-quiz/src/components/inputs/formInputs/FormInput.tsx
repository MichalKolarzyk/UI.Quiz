import { useState } from "react";

const FormInput = (props: FormInputProps) => {
  const [placeholderClassName, setPlaceholderClassName] = useState<string>(
    !props.value ? "form-input__placeholder" : "form-input__placeholder--up"
  );


  const onInputBlur = () => {
    if (!props.value) {
      setPlaceholderClassName("form-input__placeholder");
    }
  };


  return (
    <div className="form-input">
      <input
        disabled={props.disabled}
        type={props.type}
        onChange={props.onChange}
        onBlur={onInputBlur}
        onFocus={() => setPlaceholderClassName("form-input__placeholder--up")}
        className="form-input__input"
      />
      <span className={placeholderClassName}>{props.placeholder}</span>
      <span className="form-input__error">{props.errorMessage}</span>
    </div>
  );
};

export interface FormInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string;
}

export default FormInput;
