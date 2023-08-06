import { IconType } from "react-icons";

export enum IconSize{
    S = "1rem",
    M = "1.8rem",
    L = "2.4rem",
    XL = "5rem",
}

export interface IconProps{
    size: IconSize,
    iconComponent: IconType,
    className?: string,
}