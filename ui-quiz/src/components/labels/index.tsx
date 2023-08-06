import classNames from "classnames";
import classes from "./Labels.module.scss";
import { LabelProps } from "./types";

export const Label : React.FC<LabelProps> = (props) => {
    const buttonClasses = classNames(classes.label, {
        [classes["label--bold"]] : props.bold,
    })

    return <div className={buttonClasses}>{props.text ?? ""}</div>
}