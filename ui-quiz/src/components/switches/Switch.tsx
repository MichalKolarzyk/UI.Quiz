import classes from "./Switch.module.scss";
import { Icon, IconComponents } from "../icons";
import { SwitchProps } from "./types";
import FlexRow from "../flex/FlexRow";
import { GapRowEnum } from "../flex/types";
import { IconSize } from "../icons/types";
import { Label } from "../labels";

const Switch = (props: SwitchProps) => {
  const onClickHandler = () => {
    const newState = !props.value;
    props?.onChange?.(newState);
  };

  return (
    <div>
      <FlexRow.Container gap={GapRowEnum.small}>
        <button
          disabled={props.disabled}
          onClick={onClickHandler}
          className={`${classes.switch} ${props.value ? classes.on : classes.off}`}
        >
          {props.value && <Icon className={classes["check-icon"]} iconComponent={IconComponents.Check} size={IconSize.L} />}
          <div className={classes.toggle}></div>
        </button>
        <Label bold text={props.label}/>
      </FlexRow.Container>
    </div>
  );
};

export default Switch;
