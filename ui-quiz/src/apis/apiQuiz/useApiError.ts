import { useState } from "react"

export const useApiError = <T>() => {

    const [fieldErrors, setFieldErrors] = useState<T>();

    const setError = (reason : any) => {
        let newError : any;
        for(const item in fieldErrors){
            newError[item] = reason.response.data.errors[capitalizeFirstLetter(item)] ?? ""
        }
        setFieldErrors(newError as T)
    }

    return{
        setError,
        erros: fieldErrors
    }
}

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}