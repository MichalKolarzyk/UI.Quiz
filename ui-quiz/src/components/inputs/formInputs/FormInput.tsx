const FormInput = (props: FormInputProps) => {
  return (
    <div className="form-input">
      <input
        placeholder=" "
        disabled={props.disabled}
        type={props.type}
        onChange={props.onChange}
        className="form-input__input"
      />
      <span className="form-input__placeholder">{props.placeholder}</span>
      <span className="form-input__error">{props.errorMessage}</span>
    </div>
  );
};

export interface FormInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string;
}

export default FormInput;
