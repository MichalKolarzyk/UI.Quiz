import classes from './Button.module.scss'

const Button = (props: ButtonProps) => {
    return <button {...props} className={`${classes.button} ${props.className}`}>{props.children}</button>
}

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default Button;