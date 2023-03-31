import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../../apis/apiQuiz/ApiQuizModels";
import { createQuestion, getQuestionById } from "./asyncActions";

export interface CreateQuestionState {
    question?: Question;
    createdQuestionId?: string;
}

const initialState: CreateQuestionState = {
    question: undefined,
    createdQuestionId: undefined,
}

export const questionStateSlice = createSlice({
    initialState,
    name: "question",
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(createQuestion.fulfilled, (state, action) => {
            state.createdQuestionId = action.payload.id;
        })
        builder.addCase(getQuestionById.fulfilled, (state, action) => {
            state.question = action.payload;
        })
    }});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const createQuestionActions = questionStateSlice.actions;

export default questionStateSlice.reducer;