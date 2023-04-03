import classes from './ErrorMessage.module.scss'

const ErrorMessage : React.FC<ErrorMessageProps> = (props) => {
    return <div className={classes.error}>{props.message}</div>
}

export interface ErrorMessageProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    message?: string
}

export default ErrorMessage;