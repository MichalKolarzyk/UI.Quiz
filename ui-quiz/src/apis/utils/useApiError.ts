import { useState } from "react"

export const useApiError = <T>() => {

    const [fieldErrors, setFieldErrors] = useState<T>();
    const [message, setMessage] = useState<string>();

    const setError = (reason : any) => {
        let newError = {} as any;
        for(const error in reason.response.data.errors){
            newError[lowerFirstLetter(error)] = reason.response.data.errors[error] ?? ""
        }
        setMessage(reason.response.data.errors[""])
        setFieldErrors(newError as T)
    }

    const restart = () => {
        setFieldErrors({} as T);
    }

    return{
        restart,
        setError,
        errors: fieldErrors,
        message,
    }
}

function lowerFirstLetter(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}