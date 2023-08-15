import { IconType } from "react-icons";
import { Colors } from "../../scss/colors/types";
import { IClick, IColor, IStyle } from "../base/types";

export enum IconSize{
    S = "1rem",
    M = "1.8rem",
    L = "2.4rem",
    XL = "5rem",
}

export interface IconProps extends IColor, IStyle{
    size?: IconSize,
    iconComponent?: IconType,
}