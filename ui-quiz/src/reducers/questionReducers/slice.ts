import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterQuestionsRequest, Question } from "../../apis/apiQuiz/ApiQuizModels";
import { createQuestion, getQuestionById, getQuestions } from "./asyncActions";

export interface CreateQuestionState {
    question?: Question;
    createdQuestionId?: string;
    questions?: Array<Question>;
    questionsCount?: number;
    questionsFilter: FilterQuestionsRequest;
}

const initialState: CreateQuestionState = {
    question: undefined,
    createdQuestionId: undefined,
    questions: undefined,
    questionsCount: undefined,
    questionsFilter: {
        isPrivate: true,
        skip: 0,
        take: 5,
    }
}

export const questionStateSlice = createSlice({
    initialState,
    name: "question",
    reducers: {
        setFilter: (state, action: PayloadAction<FilterQuestionsRequest>) => {
            state.questionsFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createQuestion.fulfilled, (state, action) => {
            state.createdQuestionId = action.payload.id;
        })
        builder.addCase(getQuestionById.fulfilled, (state, action) => {
            state.question = action.payload;
        })
        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.questions = action.payload.questions;
            state.questionsCount = action.payload.count;
        })
    }});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const {setFilter} = questionStateSlice.actions;

export default questionStateSlice.reducer;