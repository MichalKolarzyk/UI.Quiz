import React, { useState } from "react";

const SimplePopup = (props: SimplePopupProps) => {
  const [activeItem, setActiveItem] = useState<string>();

  const itemsElements = props.items?.map((i) => (
    <div className={`multi-button__item${i == activeItem ? "--active" : ""}`} onClick={() => {setActiveItem(i); props.onActiveItemChange?.(i)}}>
      {i}
    </div>
  ));

  return <div className="multi-button__card">{itemsElements}</div>

};

export interface SimplePopupProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  items?: Array<string>;
  onActiveItemChange?: (item: string) => void; 
}

export default SimplePopup;
