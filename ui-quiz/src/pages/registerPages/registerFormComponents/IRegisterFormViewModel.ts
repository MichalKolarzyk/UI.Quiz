export interface IRegisterFormViewModel {
    login : string,
    loginError: string,
    setLogin : (value: string) => {},
    password : string,
    passwordError : string,
    setPassword: (value: string) => {},
    repetePassword: string,
    repetePasswordError: string,
    setRepetePassword: (value: string) => {},
    submit: (onRegistartionSucceed?: () => void) => void,
    disabled: boolean,
}