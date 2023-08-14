import classes from "./Card.module.scss"
import { CardProps } from "./types";

export const Card = (props: CardProps) => {
    return <div className={`${classes.card} ${props.backgroundColor} ${props.className}`} {...props}>{props.children}</div>
}