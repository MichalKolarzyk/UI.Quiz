import { IChildren, IClick, IDisabled, IStyle, IVisible } from "../base/types";

export interface ButtonProps extends IStyle, IChildren, IClick, IDisabled, IVisible {
    type?: ButtonType,
}

export enum ButtonType{
    Primary,
    Secondary,
    Tertiary,
    NavLink,
}