import { ButtonProps } from '../Button/Button';
import classes from './CreateButton.module.scss'

const CreateButton: React.FC<ButtonProps> = (props : ButtonProps) => {
    const buttonClass = `${classes.button} ${props.className}`
    
    return <button {...props} className={buttonClass}>{props.children}</button>
}

export default CreateButton;