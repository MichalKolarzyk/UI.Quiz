import { Icon, IconComponents } from "../icons";
import classes from "./Button.module.scss";
import { NavLink, NavLinkProps } from "react-router-dom";
import WithStyles from "../base/WithStyles";
import { BasicButtonProps, BasincComponentButtonProps, ButtonProps, NavButtonProps } from "./types";
import { IconSize } from "../icons/types";
import FlexRow from "../flex/FlexRow";
import { GapRowEnum } from "../flex/types";
import { Label } from "../labels";
import { Colors } from "../../scss/types";

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
    <BasicButton disabled={props.disabled} onClick={props.onClick} className={props.className}>
      <FlexRow.Container gap={GapRowEnum.small} reverse={props.iconPosition == "left"}>
        <Label color={props.labelColor} text={props.label} bold />
        <Icon color={props.labelColor} iconComponent={props.icon} size={IconSize.L} />
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

export const NavButton = (props: NavButtonProps) => {
  return (
    <NavLink
      to={props.to}
      end
      className={({ isActive, isPending }) =>
        `${classes.button}} ${
          isPending ? "" : isActive ? classes["button--text--active"] : ""
        }`
      }
    ></NavLink>
  );
};

export const GoBackButton: React.FC<BasicButtonProps> = (props: ButtonProps) => {
  return <SecondaryButton onClick={props.onClick} icon={IconComponents.Previous} label="Back" iconPosition="left" />;
};

export const TextButton = WithStyles(BasicButton, `${classes["button--text"]} ${classes["button-padding-small"]}`);
export const IconBlackButton = WithStyles(
  BasicButton,
  `${classes["button--text"]} ${classes["button-padding-none"]} ${classes["button-color-black"]}`
);
export const EmptyButton = WithStyles(BasicButton, `${classes["button--text"]} ${classes["button-padding-none"]}`);
export const CreateButton = WithStyles(BasicButton, `${classes["button--create"]}`);
export const RoundedButton = WithStyles(BasicButton, `${classes["button--rounded"]}`);
export const TransparentButton = WithStyles(BasicButton, `${classes["button--transparent"]}`);
export const ButtonDark = WithStyles(BasicButton, `${classes["button--dark"]}`);

const ButtonContainer = (props: any) => {
  return <FlexRow.Container gap={GapRowEnum.small}>{props.children}</FlexRow.Container>;
};



export const CloseButton: React.FC<BasicButtonProps> = (props) => {
  return (
    <EmptyButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.Close} size={IconSize.L} />
      </ButtonContainer>
    </EmptyButton>
  );
};

export const DeleteButton: React.FC<BasicButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.Delete} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const CancelButton: React.FC<BasicButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <div>Cancel</div>
        <Icon iconComponent={IconComponents.Cancel} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const EdiiButton: React.FC<BasicButtonProps> = (props) => {
  return (
    <IconBlackButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.Edit} size={IconSize.L} />
      </ButtonContainer>
    </IconBlackButton>
  );
};

export const NextButton: React.FC<BasicButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <div>Next</div>
        <Icon iconComponent={IconComponents.Next} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const PreviousButton: React.FC<BasicButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.Previous} size={IconSize.L} />
        <div>Prev</div>
      </ButtonContainer>
    </TextButton>
  );
};

export const HeaderPageButton: React.FC<HeaderPageButtonProps> = (props) => {
  return (
    <NavLink
      {...props}
      end
      className={({ isActive, isPending }) =>
        `${classes.button} ${classes["button--text"]} ${
          isPending ? "" : isActive ? classes["button--text--active"] : ""
        }`
      }
    ></NavLink>
  );
};

export interface HeaderPageButtonProps extends NavLinkProps {}
