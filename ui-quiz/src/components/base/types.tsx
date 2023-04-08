export interface ComponentProps{
    disabled?: boolean,
    isLoading?: boolean,
    children?: any,
}

export interface InputComponentProps extends ComponentProps{
    placeholder?: string;
    errorMessage?: string,
    type?: string,
}