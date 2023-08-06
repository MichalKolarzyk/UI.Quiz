import React from "react";

const PromptContext = React.createContext<IPromptState>({
    isVisible: false,
    setIsVisible: () => {},
    content: {},
    setContent: () => {},
    title: "",
    setTitle: () => {},
});

export default PromptContext


export interface IPromptState{
    isVisible: boolean,
    setIsVisible: (value: boolean) => void,
    content: any,
    setContent: (value: any) => void,
    title: string,
    setTitle: (value: string) => void
}