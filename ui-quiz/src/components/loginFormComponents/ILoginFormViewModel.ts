export default interface ILoginFormViewModel{
    login: string;
    setLogin: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    submit: () => void;
    disabled: boolean
}