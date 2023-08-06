import classes from "./FlexContainer.module.scss";
import { FlexColumnProps } from "./types";
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


export default FlexColumn;
