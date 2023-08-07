import WithStyles from "../base/WithStyles";
import classes from "./Card.module.scss"
import { CardProps } from "./types";

export const Card = (props: CardProps) => {
    return <div className={classes.card}>{props.children}</div>
}

export const DarkCard = WithStyles(Card, classes['dark-card']);
export const RedCard = WithStyles(Card, classes['red-card']);
