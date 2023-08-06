import { CancelIcon, DeleteIcon, EditIcon, GoBackIcon, NextIcon, PreviousIcon } from "../icons";
import classes from "./Button.module.scss";
import { NavLink, NavLinkProps } from "react-router-dom";
import WithStyles from "../base/WithStyles";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  return <button {...props} className={`${classes.button} ${props.className}`}>{props.children}</button>
}

export const TextButton =  WithStyles(Button, `${classes["button--text"]} ${classes["button-padding-small"]}`)
export const TextBlackButton =  WithStyles(Button, `${classes["button--text"]} ${classes["button-padding-none"]} ${classes["button-color-black"]}`)
export const CreateButton =  WithStyles(Button, `${classes["button--create"]}`)
export const RoundedButton =  WithStyles(Button, `${classes["button--rounded"]}`)
export const TransparentButton =  WithStyles(Button, `${classes["button--transparent"]}`)
export const ButtonDark =  WithStyles(Button, `${classes["button--dark"]}`)


const ButtonContainer: React.FC<ButtonProps> = (props) => {
  return <div className={classes.buttonContainer}>{props.children}</div>;
};


export const GoBackButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <GoBackIcon className={classes.icon} />
      </ButtonContainer>
    </TextButton>
  );
};


export const DeleteButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <DeleteIcon className={classes.icon} />
      </ButtonContainer>
    </TextButton>
  );
};

export const CancelButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <div>Cancel</div>
        <CancelIcon className={classes.icon} />
      </ButtonContainer>
    </TextButton>
  );
};

export const EdiiButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextBlackButton {...props}>
      <ButtonContainer>
        <EditIcon className={classes.icon} />
      </ButtonContainer>
    </TextBlackButton>
  );
};

export const NextButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <div>Next</div>
        <NextIcon className={classes.icon} />
      </ButtonContainer>
    </TextButton>
  );
};

export const PreviousButton: React.FC<ButtonProps> = (props) => {
  return (
    <TextButton {...props}>
      <ButtonContainer>
        <PreviousIcon className={classes.icon} />
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
      className={({ isActive, isPending }) => `${classes.button} ${classes['button--text']} ${(isPending ? "" : isActive ? classes["button--text--active"] : "")}`}
    ></NavLink>
  );
};

export interface HeaderPageButtonProps extends NavLinkProps {}
