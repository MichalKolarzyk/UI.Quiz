import classes from './RoundedButton.module.scss'

const RoundedButton: React.FC<RoundedButtonProps> = (props : RoundedButtonProps) => {
    const buttonClass = `${classes.button} ${props.className}`
    
    return <button {...props} className={buttonClass}>{props.children}</button>
}

export interface RoundedButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default RoundedButton;