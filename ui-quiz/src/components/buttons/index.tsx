import { Icon, IconComponents } from "../icons";
import classes from "./Button.module.scss";
import { NavLink, NavLinkProps } from "react-router-dom";
import WithStyles from "../base/WithStyles";
import { ButtonProps } from "./types";
import { IconSize } from "../icons/types";
import FlexRow from "../flex/FlexRow";
import { GapRowEnum } from "../flex/types";

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={`${classes.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export const TextButton = WithStyles(Button, `${classes["button--text"]} ${classes["button-padding-small"]}`);
export const IconBlackButton = WithStyles(
  Button,
  `${classes["button--text"]} ${classes["button-padding-none"]} ${classes["button-color-black"]}`
);
export const EmptyButton = WithStyles(Button, `${classes["button--text"]} ${classes["button-padding-none"]}`);
export const CreateButton = WithStyles(Button, `${classes["button--create"]}`);
export const RoundedButton = WithStyles(Button, `${classes["button--rounded"]}`);
export const TransparentButton = WithStyles(Button, `${classes["button--transparent"]}`);
export const ButtonDark = WithStyles(Button, `${classes["button--dark"]}`);

const ButtonContainer = (props: any) => {
  return <FlexRow.Container gap={GapRowEnum.small}>{props.children}</FlexRow.Container>;
};

export const GoBackButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.GoBack} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const DeleteButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.Delete} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const CancelButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <div>Cancel</div>
        <Icon iconComponent={IconComponents.Cancel} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const EdiiButton: React.FC<ButtonProps> = (props) => {
  return (
    <IconBlackButton {...props}>
      <ButtonContainer>
        <Icon iconComponent={IconComponents.Edit} size={IconSize.L} />
      </ButtonContainer>
    </IconBlackButton>
  );
};

export const NextButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <div>Next</div>
        <Icon iconComponent={IconComponents.Next} size={IconSize.L} />
      </ButtonContainer>
    </TextButton>
  );
};

export const PreviousButton: React.FC<ButtonProps> = (props) => {
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
