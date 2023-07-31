import React from "react"

export const LoginFormContext = React.createContext<ILoginFormState>({})

export interface ILoginFormState{
    email?: string,
    setEmail?: (value : string) => void,
    password?: string,
    setPassword?: (value : string) => void,
    isLoading?: boolean
    errorMessage?: string,
    signIn?: () => void;
    signUp?: () => void;
}
