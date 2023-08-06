import classes from "./FlexContainer.module.scss";
import { FlexRowItemProps, FlexRowProps } from "./types";
const FlexRowContainer: React.FC<FlexRowProps> = (props) => {
  return (
    <div
      style={{
        gap: props.gap?.toString(),
        justifyContent:  props.itemsPosition,
        height: props.fullHeight ? "100%" : "",
      }}
      className={`${classes.row}`}
    >
      {props.children}
    </div>
  );
};

const Item: React.FC<FlexRowItemProps> = (props) => {
  return (
    <div style={{ flexGrow: props.grow ?? 0 }} className={`${classes.rowItem}`}>
      {props.children}
    </div>
  );
};

const FlexRow = {
  Container: FlexRowContainer,
  Item,
};


export default FlexRow;
