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

export interface IList<T>{
    items?: Array<T>,
}

export interface ILoading{
    isLoading?: boolean,
}

export interface IType{
    type?: string,
}

export interface IChildren{
    children?: any,
}

