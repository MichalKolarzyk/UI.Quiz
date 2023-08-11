import { useState } from "react";

const useList = <T,>(initialState: Array<T>) => {
    const [items, setItems] = useState<Array<T>>(initialState);

    const remove = (index: number) => {
      setItems((prevItems) => {
        const updatedtems = [...prevItems];
        updatedtems.splice(index, 1);
        return updatedtems;
      });
    };

    const add = (value: T) => {
      setItems((prevItems) => [...prevItems, value]);
    };

    const setItem = (value: T, index: number) => {
      setItems((prevItems) => {
        const updatedtems = [...prevItems];
        updatedtems[index] = value;
        return updatedtems;
      });
    };

    return {
      items,
      setItems,
      setItem,
      remove,
      add,
    };
  };

export default useList;
