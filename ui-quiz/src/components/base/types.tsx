export interface IStyle{
    className?: string,
}

export interface IDisabled{
    disabled?: boolean,
}

export interface ILoading{
    isLoading?: boolean,
}

export interface IVisible{
    isHidden?: boolean,
}

export interface ISingleValue<T>{
    value?: T,
    onChange?: (value: T) => void,
}

export interface IList<T>{
    items?: Array<T>,
}

export interface IPlaceholder{
    placeholder?: string;
}

export interface IError{
    error?: string,
}

export interface IType{
    type?: string,
}

export interface IChildren{
    children?: any,
}

export interface IClick{
    onClick?: () => void;
}