import { IconType } from "react-icons";
import { IBackgroundColor, IChildren, IClick, IDisabled, IStyle, IVisible } from "../base/types";
import { Colors } from "../../scss/colors/types";

export interface BasicButtonProps extends IStyle, IChildren, IClick, IDisabled, IVisible {}

export interface BasincComponentButtonProps extends IStyle, IClick, IDisabled, IVisible {
    label?: string,
    labelColor : Colors,
    icon?: IconType,
    iconPosition?: "left" | "right"
}

export interface ButtonProps extends IClick, IDisabled, IVisible {
    label?: string,
    icon?: IconType,
    iconPosition?: "left" | "right"
}

export interface TertiaryButtonProps extends IClick, IDisabled, IVisible {
    color? : Colors
    label?: string,
    icon?: IconType,
    iconPosition?: "left" | "right"
}

export interface NavButtonProps extends IClick {
    label?: string,
    to: string,
}