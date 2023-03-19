import classes from './CreateButton.module.scss'

const CreateButton: React.FC<CreateButtonProps> = (props : CreateButtonProps) => {
    const buttonClass = `${classes.button} ${props.className}`
    
    return <button {...props} className={buttonClass}>{props.children}</button>
}

export interface CreateButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default CreateButton;