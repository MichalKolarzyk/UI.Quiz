import classes from './TextButton.module.scss'

const TextButton: React.FC<TextButtonProps> = (props : TextButtonProps) => {
    const buttonClass = `${classes.button} ${props.className}`
    
    return <button {...props} className={buttonClass}>{props.children}</button>
}

export interface TextButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default TextButton;