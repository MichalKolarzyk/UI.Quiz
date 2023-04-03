import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../../apis/apiQuiz/ApiQuizModels";
import { createQuestion, getQuestionById, getQuestions } from "./asyncActions";
import { ActionState } from "..";

export interface CreateQuestionState {
    question?: Question;
    createdQuestionId?: string;
    questions?: Array<Question>;
    questionsCount?: number;
    error: QuestionError;
}

export interface QuestionError{
    question: string,
    answers: string,
    correctAnswerIndex: string,
}

const initialState: CreateQuestionState = {
    question: undefined,
    createdQuestionId: undefined,
    questions: undefined,
    questionsCount: undefined,
    error: {
        answers: "",
        correctAnswerIndex: "",
        question: "",
    }
}

export const questionStateSlice = createSlice({
    initialState,
    name: "question",
    reducers: {
        setQuestion: (state, action: PayloadAction<Question>) => {
            state.question = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createQuestion.fulfilled, (state, action) => {
            state.error = {
                answers: "",
                correctAnswerIndex: "",
                question: "",
            }
            state.createdQuestionId = action.payload.id;
        })
        builder.addCase(getQuestionById.fulfilled, (state, action) => {
            state.question = action.payload;
        })
        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.questions = action.payload.questions;
            state.questionsCount = action.payload.count;
        })
        builder.addCase(createQuestion.rejected, (state, action) => {
            const payload : any = action.payload;
            state.error.answers = payload.errors["Answers"];
            state.error.question = payload.errors["Description"];
            state.error.correctAnswerIndex = payload.errors["CorrectAnswerIndex"];
        })
        builder.addCase(createQuestion.pending, (state) => {
        })
    }});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const {setQuestion} = questionStateSlice.actions;

export default questionStateSlice.reducer;