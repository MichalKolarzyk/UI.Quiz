import { useEffect, useState } from "react";

const useBrowserCache = <T,>(key: string): [T | undefined, (value: T | null) => void] => {
  const [stateValue, setStateValue] = useState<T>();

  const setValue = (item: T | null) => {
    if (item === null) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(item));
    setStateValue(item);
  };

  useEffect(() =>{
    try {
      const newState = JSON.parse(localStorage.getItem(key) ?? "") as T;
      setStateValue(newState);
    } catch {
      const newState = localStorage.getItem(key) as T;
      setStateValue(newState);
    }
  },[])

  return [stateValue, setValue];
};

export default useBrowserCache;
