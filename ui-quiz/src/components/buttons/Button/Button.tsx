const Button = (props: ButtonProps) => {
    return <button {...props}>{props.children}</button>
}

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default Button;