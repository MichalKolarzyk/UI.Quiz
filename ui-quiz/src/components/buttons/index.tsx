import { Icon, IconComponents } from "../icons";
import classes from "./Button.module.scss";
import { NavLink, NavLinkProps } from "react-router-dom";
import { BasicButtonProps, BasincComponentButtonProps, ButtonProps, ComponentActionButtonProps, NavButtonProps, TertiaryButtonProps } from "./types";
import { IconSize } from "../icons/types";
import FlexRow from "../flex/FlexRow";
import { GapRowEnum } from "../flex/types";
import { Label } from "../labels";
import { Colors } from "../../scss/colors/types";

export const BasicButton = (props: BasicButtonProps) => {
  if (props.isHidden) return <></>;
  return (
    <button className={`${classes.button} ${props.className}`} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const BasicComponentButton = (props: BasincComponentButtonProps) => {
  return (
    <BasicButton disabled={props.disabled} onClick={props.onClick} className={props.className} isHidden={props.isHidden}>
      <FlexRow.Container gap={GapRowEnum.small} reverse={props.iconPosition == "left"}>
        <Label color={props.labelColor} text={props.label} bold />
        <Icon color={props.labelColor} iconComponent={props.icon} size={props.iconSize ?? IconSize.L} />
      </FlexRow.Container>
    </BasicButton>
  );
};

export const PrimaryButton = (props: ButtonProps) => {
  return <BasicComponentButton labelColor={Colors.white} className={classes.primary} {...props} />;
};

export const SecondaryButton = (props: ButtonProps) => {
  return <BasicComponentButton labelColor={Colors.white} className={classes.secondary} {...props} />;
};

export const TertiaryButton = (props: TertiaryButtonProps) => {
  return <BasicComponentButton labelColor={props.color ?? Colors.white} className={classes.tertiary} {...props} />;
}

export const ComponentActionButton = (props: ComponentActionButtonProps) => {
  return <BasicComponentButton iconSize={IconSize.L} labelColor={props.color ?? Colors.grey} className={classes["component-action"]} {...props} />;
}

export const NavButton = (props: NavButtonProps) => {
  return (
    <NavLink
      to={props.to}
      end
      className={({ isActive, isPending }) =>
        `${classes.button} ${classes.navigate} ${isPending ? "" : isActive ? classes["navigate--active"] : ""}`
      }
    >{props.label}</NavLink>
  );
};


export const GoBackButton: React.FC<BasicButtonProps> = (props: ButtonProps) => {
  return <TertiaryButton color={Colors.white} onClick={props.onClick} icon={IconComponents.Previous} label="Back" iconPosition="left" />;
};