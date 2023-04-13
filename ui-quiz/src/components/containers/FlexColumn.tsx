import classes from "./FlexContainer.module.scss";
const FlexRowContainer: React.FC<FlexColumnProps> = (props) => {
  return (
    <div
      style={{
        gap: props.gap?.toString(),
      }}
      className={`${classes.column}`}
    >
      {props.children}
    </div>
  );
};

const FlexColumn = {
  Container: FlexRowContainer,
};

export interface FlexColumnProps {
  children?: any;
  gap?: GapColumnEnum;
}

export enum GapColumnEnum {
  small = "1rem",
  medium = "2rem",
  big = "3rem",
}

export default FlexColumn;
