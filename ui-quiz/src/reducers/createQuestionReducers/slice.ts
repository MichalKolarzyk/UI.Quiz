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
            console.log("aaddd")
            state.answers.push("");
        },
        setAnswer: (state, action: PayloadAction<SetAnswerPayload>) => {
            state.answers[action.payload.index] = action.payload.text;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category= action.payload;
        },
        deleteAnswer: (state, action: PayloadAction<number>) => {
            state.answers.splice(action.payload, 1);
            if(action.payload > state.correctAnswerIndex){
                return;
            }
            if(action.payload == state.correctAnswerIndex){
                state.correctAnswerIndex = -1;
                return;
            }
            state.correctAnswerIndex -= 1;
        },

        clearAll: (state) => {
            state.answers = initialState.answers;
            state.category = initialState.category;
            state.correctAnswerIndex = initialState.correctAnswerIndex;
            state.isPrivate = initialState.isPrivate;
            state.question = initialState.question;
        }
    }
});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const createQuestionActions = createQuestionStateSlice.actions;

export default createQuestionStateSlice.reducer;