import classes from "./FlexContainer.module.scss";
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

export interface FlexRowProps {
  children?: any;
  gap?: GapRowEnum;
  itemsPosition? : RowPositionEnum,
  fullHeight?: boolean;
}

export interface FlexRowItemProps {
  grow?: number;
  children?: any;
}

export enum GapRowEnum {
  small = "1rem",
  medium = "2rem",
  big = "3rem",
}

export enum RowPositionEnum {
  left = "left",
  center = "center",
  right = "right",
}

export default FlexRow;
