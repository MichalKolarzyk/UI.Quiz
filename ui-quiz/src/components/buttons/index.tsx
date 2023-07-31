import { CancelIcon, DeleteIcon, EditIcon, GoBackIcon, NextIcon, PreviousIcon } from "../icons";
import Button, { ButtonProps } from "./Button";
import ButtonContainer from "./ButtonContainer";
import classes from "./Button.module.scss";
import { NavLink, NavLinkProps } from "react-router-dom";

export const GoBackButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${classes["button--text"]} ${classes["button-padding-small"]}`}>
      <ButtonContainer>
        <GoBackIcon className={classes.icon} />
      </ButtonContainer>
    </Button>
  );
};

export const TextButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`${classes["button--text"]} ${classes["button-padding-small"]}`}></Button>;
};

export const DeleteButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${classes["button--text"]} ${classes["button-padding-small"]}`}>
      <ButtonContainer>
        <DeleteIcon className={classes.icon} />
      </ButtonContainer>
    </Button>
  );
};

export const CancelButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${classes["button--text"]}`}>
      <ButtonContainer>
        <div>Cancel</div>
        <CancelIcon className={classes.icon} />
      </ButtonContainer>
    </Button>
  );
};

export const CreateButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`${classes["button--create"]}`}></Button>;
};

export const RoundedButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`${classes["button--rounded"]}`}></Button>;
};

export const TransparentButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`${classes["button--transparent"]}`}></Button>;
};

export const ButtonDark: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className={`${classes["button--dark"]}`}></Button>;
};

export const EdiiButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={`${classes["button--text"]} ${classes["button-padding-none"]} ${classes["button-color-black"]}`}
    >
      <ButtonContainer>
        <EditIcon className={classes.icon} />
      </ButtonContainer>
    </Button>
  );
};

export const NextButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${classes["button--text"]}`}>
      <ButtonContainer>
        <div>Next</div>
        <NextIcon className={classes.icon} />
      </ButtonContainer>
    </Button>
  );
};

export const PreviousButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`${classes["button--text"]}`}>
      <ButtonContainer>
        <PreviousIcon className={classes.icon} />
        <div>Prev</div>
      </ButtonContainer>
    </Button>
  );
};

export const HeaderPageButton: React.FC<HeaderPageButtonProps> = (props) => {
  return (
    <NavLink
      {...props}
      end
      className={({ isActive, isPending }) => `${classes.button} ${classes['button--text']} ${(isPending ? "" : isActive ? classes["button--text--active"] : "")}`}
    ></NavLink>
  );
};

export interface HeaderPageButtonProps extends NavLinkProps {}
