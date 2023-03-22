import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CreateQuestionState {
    question: string,
    answers: Array<string>,
    correctAnswerIndex: number,
    category: string,
    isPrivate: boolean,
}

const initialState: CreateQuestionState = {
    question: "",
    answers: ['','',''],
    correctAnswerIndex: 0,
    category: "",
    isPrivate: true,
}

export const createQuestionStateSlice = createSlice({
    initialState,
    name: "createQuestion",
    reducers: {
        setIsPrivate: (state, action: PayloadAction<boolean>) => {
            state.isPrivate = action.payload;
        },
        setQuestion: (state, action: PayloadAction<string>) => {
            state.question = action.payload;
        },
        setCorrectAnswerIndex:(state, action: PayloadAction<number>) => {
            state.correctAnswerIndex = action.payload;
        },
        addAnswer: (state) => {
            state.answers.push("");
        },
        setAnswer: (state, action: PayloadAction<SetAnswerPayload>) => {
            state.answers[action.payload.index] = action.payload.text;
        }
    }
});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const {setIsPrivate, setQuestion, setCorrectAnswerIndex} = createQuestionStateSlice.actions;

export default createQuestionStateSlice.reducer;