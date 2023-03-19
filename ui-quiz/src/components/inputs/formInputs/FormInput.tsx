import classes from './FormInput.module.scss'

const FormInput = (props: FormInputProps) => {
  return (
    <div>
      <input className={classes.input} {...props}></input>
      <div className={classes.error}>{props.errorMessage}</div>
    </div>
  );
};

export interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string;
}

export default FormInput;
