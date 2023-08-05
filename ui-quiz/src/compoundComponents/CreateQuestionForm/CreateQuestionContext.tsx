import React from "react";

const CreateQuestionContext = React.createContext<ICreateQuestionState>({
    isModify: false,
    question: "",
    setQuestion: (question: string) => {},
    isPrivate: true,
    setIsPrivate: (isPrivate: boolean) => {},
    category: "",
    setCategory: (category: string) => {},
    language: "",
    setLanguage: (language: string) => {},
    correctAnswer: 0,
    setCorrectAnswer: (index: number) => {},
    answers: ["", "", ""],
    addAnswear: () => {},
    removeAnswear: (index: number) => {},
    setAnswear: (answer: string, index: number) => {},
    createQuestion: () => {},
    isLoading: false,
    goBack: () => {},
});

export default CreateQuestionContext;

export interface ICreateQuestionState{
    isModify: boolean,
    question: string,
    setQuestion: (question: string) => void,
    questionError?: string,
    isPrivate: boolean,
    setIsPrivate: (isPrivate: boolean) => void,
    isPrivateError?: string,
    category: string,
    setCategory: (category: string) => void,
    categoryError?: string,
    language: string,
    setLanguage: (language: string) => void,
    correctAnswer: number,
    answers: Array<string>,
    addAnswear: () => void,
    removeAnswear: (index: number) => void,
    setAnswear: (answer: string, index: number) => void,
    setCorrectAnswer: (index: number) => void,
    createQuestion: () => void,
    isLoading: boolean,
    categoryItems?: Array<string>, 
    goBack: () => void,
}