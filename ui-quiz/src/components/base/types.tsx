export interface ComponentProps{
    disabled?: boolean,
    isLoading?: boolean,
    children?: any,
}

export interface InputComponentProps extends ComponentProps{
    placeholder?: string;
    type?: string,
}

export interface SingleValueProps{
    value?: string,
    setValue?: (newValue: string) => void;
    placeholder?: string;
}

export interface ErrorComponent{
    errorMessage?: string,
}