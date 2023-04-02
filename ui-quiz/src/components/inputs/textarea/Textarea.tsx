import ErrorMessage from "../../errors/ErrorMessage";
import classes from "./Textarea.module.scss";

const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
  return (
    <div>
      <textarea className={classes.textarea} {...props} />
      <ErrorMessage message={props.errorMessage}/>
    </div>
  );
};

export interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    errorMessage?: string
  }

export default Textarea;
