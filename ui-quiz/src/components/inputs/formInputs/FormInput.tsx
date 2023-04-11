import ErrorMessage from '../../errors';
import classes from './FormInput.module.scss'

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <input {...props} className={classes.input} ></input>
      <ErrorMessage message={props.errorMessage}/>
    </>
  );
};

export interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string;
}

export default FormInput;
