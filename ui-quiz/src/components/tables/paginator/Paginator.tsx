import { useState } from "react";
import RoundedButton from "../../buttons/RoundedButton/RoundedButton";
import NumberView from "./NumberView";
import classes from "./Paginator.module.scss";

const Paginator = (props: PaginatorProps) => {
  const visibleNumbers = 7
  const centerNumbers = Math.round(visibleNumbers/2);
  const sideNumbers = Math.round((visibleNumbers - 3) / 2);

  const [selectedNumber, setSelectedNumber] = useState(1);

  const numberView: JSX.Element[] = new Array<JSX.Element>();

  const getNumberView = (number: number) => {
    return (
      <NumberView isSelected={number == selectedNumber} number={number} onClick={() => onNumberClickHandler(number)} />
    );
  };

  const getDotsView = () => {
    return <div className={classes.space}>...</div>;
  };

  if (props.pagesNumber <= visibleNumbers) {
    for (let i = 1; i <= props.pagesNumber; i++) {
      numberView.push(getNumberView(i));
    }
  } else {
    if (selectedNumber <= centerNumbers) {
      for (let i = 1; i <= visibleNumbers - 1; i++) {
        numberView.push(getNumberView(i));
      }
      numberView.push(getDotsView());
      numberView.push(getNumberView(props.pagesNumber));
    } else if (selectedNumber > centerNumbers && selectedNumber <= props.pagesNumber - 3) {
      numberView.push(getNumberView(1));
      numberView.push(getDotsView());
      for (let i = selectedNumber - sideNumbers; i <= selectedNumber + sideNumbers; i++) {
        numberView.push(getNumberView(i));
      }
      numberView.push(getDotsView());
      numberView.push(getNumberView(props.pagesNumber));
    } else if (selectedNumber > props.pagesNumber - centerNumbers) {
      numberView.push(getNumberView(1));
      numberView.push(getDotsView());
      for (let i = props.pagesNumber - visibleNumbers + 2; i <= props.pagesNumber; i++) {
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
      <RoundedButton disabled={selectedNumber <= 1} onClick={onPrevClickHandler}>
        Prev
      </RoundedButton>
      {numberView}
      <RoundedButton disabled={selectedNumber >= props.pagesNumber} onClick={onNextClickHandler}>
        Next
      </RoundedButton>
    </div>
  );
};

export interface PaginatorProps {
  onPageChange: (newPage: number) => void;
  pagesNumber: number;
}

export default Paginator;
