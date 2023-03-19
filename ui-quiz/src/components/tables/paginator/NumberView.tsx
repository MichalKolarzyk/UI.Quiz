import classes from "./Paginator.module.scss";

const NumberView = (props: NumberViewProps) => {
  const className = props.isSelected ? classes["selected-number"] : classes.number;
  return (
    <div onClick={() => props.onClick()} className={className}>
      {props.number}
    </div>
  );
};

export interface NumberViewProps{
    number: number;
    isSelected: boolean;
    onClick: () => void;
}

export default NumberView;
