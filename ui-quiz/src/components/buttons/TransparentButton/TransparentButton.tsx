import classes from './TransparentButton.module.scss'

const TransparentButton : React.FC<TransparentButtonProps> = (props: TransparentButtonProps) => {
    return <button {...props} className={classes.button}>{props.children}</button>
}
export interface TransparentButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

export default TransparentButton;