import { Colors } from "../../../scss/colors/types";
import { TertiaryButton } from "../../buttons";
import FlexRow from "../../flex/FlexRow";
import { GapRowEnum, RowPositionEnum } from "../../flex/types";
import { IconComponents } from "../../icons";
import NumberView from "./NumberView";
import classes from "./Paginator.module.scss";

const Paginator = (props: PaginatorProps) => {
  const visibleNumbers = 7;
  const centerNumbers = Math.round(visibleNumbers / 2);
  const sideNumbers = Math.round((visibleNumbers - 3) / 2);

  const numberView: JSX.Element[] = new Array<JSX.Element>();

  const getNumberView = (number: number) => {
    return (
      <NumberView
        key={number}
        isSelected={number == props.page}
        number={number}
        onClick={() => onNumberClickHandler(number)}
      />
    );
  };

  const getDotsView = () => {
    return <div className={classes.space}>...</div>;
  };

  if (props.pages <= visibleNumbers) {
    for (let i = 1; i <= props.pages; i++) {
      numberView.push(getNumberView(i));
    }
  } else {
    if (props.page <= centerNumbers) {
      for (let i = 1; i <= visibleNumbers - 1; i++) {
        numberView.push(getNumberView(i));
      }
      numberView.push(getDotsView());
      numberView.push(getNumberView(props.pages));
    } else if (props.page > centerNumbers && props.page <= props.pages - 3) {
      numberView.push(getNumberView(1));
      numberView.push(getDotsView());
      for (let i = props.page - sideNumbers; i <= props.page + sideNumbers; i++) {
        numberView.push(getNumberView(i));
      }
      numberView.push(getDotsView());
      numberView.push(getNumberView(props.pages));
    } else if (props.page > props.pages - centerNumbers) {
      numberView.push(getNumberView(1));
      numberView.push(getDotsView());
      for (let i = props.pages - visibleNumbers + 2; i <= props.pages; i++) {
        numberView.push(getNumberView(i));
      }
    }
  }

  const onNumberClickHandler = (clickedNumber: number) => {
    props.onPageChange(clickedNumber);
  };

  const onPrevClickHandler = () => {
    const newNumber = props.page - 1;
    props.onPageChange(newNumber);
  };

  const onNextClickHandler = () => {
    const newNumber = props.page + 1;
    props.onPageChange(newNumber);
  };

  return (
    <FlexRow.Container itemsPosition={RowPositionEnum.center} gap={GapRowEnum.medium}>
      <TertiaryButton
        color={Colors.white}
        icon={IconComponents.Previous}
        label="Prev"
        disabled={props.page <= 1}
        iconPosition="left"
        onClick={onPrevClickHandler}
      />
      {numberView}
      <TertiaryButton
        color={Colors.white}
        icon={IconComponents.Next}
        label="Next"
        disabled={props.page >= props.pages}
        onClick={onNextClickHandler}
      />
    </FlexRow.Container>
  );
};

export interface PaginatorProps {
  onPageChange: (newPage: number) => void;
  pages: number;
  page: number;
}

export default Paginator;
