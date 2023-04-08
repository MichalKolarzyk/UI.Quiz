import { useState } from "react"

export const useApiError = <T>() => {

    const [fieldErrors, setFieldErrors] = useState<T>();

    const setError = (reason : any) => {
        let newError = {} as any;
        for(const error in reason.response.data.errors){
            newError[lowerFirstLetter(error)] = reason.response.data.errors[error] ?? ""
        }
        setFieldErrors(newError as T)
    }

    const restart = () => {
        setFieldErrors({} as T);
    } 

    return{
        restart,
        setError,
        erros: fieldErrors
    }
}

function lowerFirstLetter(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}