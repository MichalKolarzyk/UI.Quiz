import { ImBin } from "react-icons/im";
import { ButtonProps } from "../Button/Button";
import classes from './DeleteButton.module.scss';

const DeleteButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <button className={classes.button} {...props}>
        <ImBin className={classes.icon}/>
    </button>
}

export default DeleteButton;