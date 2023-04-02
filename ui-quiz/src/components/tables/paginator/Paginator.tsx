import { useEffect, useState } from "react";
import { NextButton, PreviousButton, RoundedButton, TextButton } from "../../buttons";
import NumberView from "./NumberView";
import classes from "./Paginator.module.scss";

const Paginator = (props: PaginatorProps) => {
  const visibleNumbers = 7;
  const centerNumbers = Math.round(visibleNumbers / 2);
  const sideNumbers = Math.round((visibleNumbers - 3) / 2);

  const [selectedNumber, setSelectedNumber] = useState(props.initialPage);

  const numberView: JSX.Element[] = new Array<JSX.Element>();

  const getNumberView = (number: number) => {
    return (
      <NumberView key={number} isSelected={number == selectedNumber} number={number} onClick={() => onNumberClickHandler(number)} />
    );
  };

  useEffect(() => {
    setSelectedNumber(props.initialPage)
  }, [props.pages])

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
    const newNumber = selectedNumber - 1
    setSelectedNumber(newNumber);
    props.onPageChange(newNumber);
  };

  const onNextClickHandler = () => {
    const newNumber = selectedNumber + 1
    setSelectedNumber(newNumber);
    props.onPageChange(newNumber);
  };

  return (
    <div className={classes.paginator}>
      <PreviousButton disabled={selectedNumber <= 1} onClick={onPrevClickHandler}>
        Prev
      </PreviousButton>
      {numberView}
      <NextButton disabled={selectedNumber >= props.pages} onClick={onNextClickHandler}>
        Next
      </NextButton>
    </div>
  );
};

export interface PaginatorProps {
  onPageChange: (newPage: number) => void;
  pages: number;
  initialPage: number;
}

export default Paginator;
