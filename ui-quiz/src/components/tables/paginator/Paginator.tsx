import { useState } from "react";
import RoundedButton from "../../buttons/RoundedButton/RoundedButton";
import NumberView from "./NumberView";
import classes from "./Paginator.module.scss";

const Paginator = (props: PaginatorProps) => {
  const visibleNumbers = 7;
  const centerNumbers = Math.round(visibleNumbers / 2);
  const sideNumbers = Math.round((visibleNumbers - 3) / 2);

  const [selectedNumber, setSelectedNumber] = useState(props.initialPage);
  const leftSpaceVisible = selectedNumber > centerNumbers;
  const rightSpaceVisible = selectedNumber <= props.pages - centerNumbers;

  const numberView: JSX.Element[] = new Array<JSX.Element>();

  const getNumberView = (number: number) => {
    return (
      <NumberView isSelected={number == selectedNumber} number={number} onClick={() => onNumberClickHandler(number)} />
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
    if (selectedNumber <= centerNumbers) {
      for (let i = 1; i <= visibleNumbers - 1; i++) {
        numberView.push(getNumberView(i));
      }
      numberView.push(getDotsView());
      numberView.push(getNumberView(props.pages));
    } else if (selectedNumber > centerNumbers && selectedNumber <= props.pages - 3) {
      numberView.push(getNumberView(1));
      numberView.push(getDotsView());
      for (let i = selectedNumber - sideNumbers; i <= selectedNumber + sideNumbers; i++) {
        numberView.push(getNumberView(i));
      }
      numberView.push(getDotsView());
      numberView.push(getNumberView(props.pages));
    } else if (selectedNumber > props.pages - centerNumbers) {
      numberView.push(getNumberView(1));
      numberView.push(getDotsView());
      for (let i = props.pages - visibleNumbers + 2; i <= props.pages; i++) {
        numberView.push(getNumberView(i));
      }
    }
  }

  const onNumberClickHandler = (clickedNumber: number) => {
    props.onPageChange(clickedNumber);
    setSelectedNumber(clickedNumber);
  };

  const onPrevClickHandler = () => {
    setSelectedNumber(selectedNumber - 1);
  };

  const onNextClickHandler = () => {
    setSelectedNumber(selectedNumber + 1);
  };

  return (
    <div className={classes.paginator}>
      {/* {leftSpaceVisible && <div className={classes["space-left"]}>...</div>}
      {rightSpaceVisible && <div className={classes["space-right"]}>...</div>} */}
      <RoundedButton disabled={selectedNumber <= 1} onClick={onPrevClickHandler}>
        Prev
      </RoundedButton>
      {numberView}
      <RoundedButton disabled={selectedNumber >= props.pages} onClick={onNextClickHandler}>
        Next
      </RoundedButton>
    </div>
  );
};

export interface PaginatorProps {
  onPageChange: (newPage: number) => void;
  pages: number;
  initialPage: number;
}

export default Paginator;