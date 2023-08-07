import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getQuestions } from "./asyncActions";
import { FilterQuestionItem } from "../../apis/apiQuiz/models/FilterQuestions";

export interface CreateQuestionState {
    question?: FilterQuestionItem;
    createdQuestionId?: string;
    questions?: Array<FilterQuestionItem>;
    questionsCount?: number;
    error: QuestionError;
}

export interface QuestionError{
    description: string,
    answers: string,
    correctAnswerIndex: string,
    category: string,
}

const initialState: CreateQuestionState = {
    question: undefined,
    createdQuestionId: undefined,
    questions: undefined,
    questionsCount: undefined,
    error: {
        answers: "",
        correctAnswerIndex: "",
        description: "",
        category: "",
    }
}

export const questionStateSlice = createSlice({
    initialState,
    name: "question",
    reducers: {
        setQuestion: (state, action: PayloadAction<FilterQuestionItem>) => {
            state.question = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.questions = action.payload.questions;
            state.questionsCount = action.payload.count;
        })
    }});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const {setQuestion} = questionStateSlice.actions;

export default questionStateSlice.reducer;