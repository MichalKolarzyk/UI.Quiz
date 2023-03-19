import classes from './SignInButton.module.scss'

const SignInButton: React.FC<SignInButtonProps> = (props : SignInButtonProps) => {
    const buttonClass = `${classes.button} ${props.className}`
    
    return <button {...props} className={buttonClass}>{props.children}</button>
}

export interface SignInButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default SignInButton;