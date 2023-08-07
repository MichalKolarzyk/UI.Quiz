export interface ComponentProps{
    disabled?: boolean,
    isLoading?: boolean,
    children?: any,
}

export interface InputComponentProps extends ComponentProps{
    placeholder?: string;
    type?: string,
}

//new interfaces
export interface IDisabled{
    disabled?: boolean,
}

export interface ISingleValue<T>{
    value?: T,
    onChange?: (value: T) => void,
}

export interface IPlaceholder{
    placeholder?: string;
}

export interface IError{
    error?: string,
}
