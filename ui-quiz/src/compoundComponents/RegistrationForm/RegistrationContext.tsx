import React from "react";

const RegistrationContext = React.createContext<IRegistrationState>({
    login: "",
    setLogin: (value: string) => {},
    loginError: "",
    password: "",
    setPassword: (value: string) => {},
    passwordError: "",
    repetePassword: "",
    setRepetePassword: (value: string) => {},
    repetePasswordError: "",
    goBack: () => {},
    register: () => {},
    isLoading: false,
})

export default RegistrationContext;

export interface IRegistrationState{
    login: string,
    setLogin: (value: string) => void,
    loginError?: string,
    password: string,
    setPassword: (value: string) => void,
    passwordError?: string,
    repetePassword: string,
    setRepetePassword: (value: string) => void,
    repetePasswordError?: string,
    goBack: () => void,
    register: () => void,
    isLoading: boolean,
}