export default interface ILoginFormViewModel{
    login: string;
    loginError: string
    setLogin: (value: string) => void;
    password: string;
    passwordError: string;
    setPassword: (value: string) => void;
    errorMessage: string;
    submit: () => void;
    disabled: boolean
}