import { useState } from "react";

const useBrowserCache = <T,>(key: string): [T, (value: T | null) => void] => {
  const [stateValue, setStateValue] = useState<T>();
  const value = () => {
    debugger
    if (!!stateValue) {
      return stateValue;
    }
    try {
      return JSON.parse(localStorage.getItem(key) ?? "") as T;
    } catch {
      return localStorage.getItem(key) as T;
    }
  };

  const setValue = (item: T | null) => {
    if (item === null) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(item));
    setStateValue(item);
  };

  return [value(), setValue];
};

export default useBrowserCache;
