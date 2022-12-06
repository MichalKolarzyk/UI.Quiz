export interface IRegisterFormViewModel {
    login : string,
    setLogin : (value: string) => {},
    password : string,
    setPassword: (value: string) => {},
    repetePassword: string,
    setRepetePassword: (value: string) => {},
    submit: () => void,
    disabled: boolean,
}