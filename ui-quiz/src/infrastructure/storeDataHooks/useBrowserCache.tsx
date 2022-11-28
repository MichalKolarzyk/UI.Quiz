import { useState } from "react"

const useBrowserCache = <T,>(key: string) : [T, (value: T) => void] => {
    const [stateValue, setStateValue] = useState<T>();
    const value = () => {
        if(!!stateValue){
            return stateValue;
        }
        try{
            return JSON.parse(localStorage.getItem(key) ?? "") as T
        }
        catch{
            return localStorage.getItem(key) as T
        }
    }

    const setValue = (item : T) => {
        localStorage.setItem(key, JSON.stringify(item));
        setStateValue(item);
    }

    return [
        value(),
        setValue
    ]
}

export default useBrowserCache;