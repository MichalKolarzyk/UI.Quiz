import React from "react";
import classes from "./Card.module.scss"

const Card = (props: CardProps) => {
    return <div className={classes.card} {...props}>{props.children}</div>
}

export interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export default Card;