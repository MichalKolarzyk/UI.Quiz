import { CardProps } from "./Card";
import classes from "./Card.module.scss"

export const DarkCard :React.FC<CardProps> = (props) => {
    return <div {...props} className={classes['dark-card']}></div>
}