import classes from './Textarea.module.scss'

const Textarea : React.FC<TextareaProps> = (props: TextareaProps) => {
    return <textarea className={classes.textarea} {...props}></textarea>
}

export interface TextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{

}

export default Textarea;