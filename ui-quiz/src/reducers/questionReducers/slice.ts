import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterQuestionsRequest, Question } from "../../apis/apiQuiz/ApiQuizModels";
import { createQuestion, getQuestionById, getQuestions } from "./asyncActions";

export interface CreateQuestionState {
    question?: Question;
    createdQuestionId?: string;
    questions?: Array<Question>;
    questionsCount?: number;
    questionsFilter: FilterQuestionsRequest;
    questionsPagesCount: number;
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
    questionsFilter: {
        isPrivate: true,
        skip: 0,
        take: 5,
    },
    questionsPagesCount: 0,
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
        setFilter: (state, action: PayloadAction<FilterQuestionsRequest>) => {
            state.questionsFilter = action.payload;
        },
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
            state.questionsPagesCount = Math.floor(action.payload.count / state.questionsFilter.take) + (action.payload.count % state.questionsFilter.take > 0 ? 1 : 0) ;
        })
        builder.addCase(createQuestion.rejected, (state, action) => {
            const payload : any = action.payload;
            state.error.answers = payload.errors["Answers"];
            state.error.question = payload.errors["Description"];
            state.error.correctAnswerIndex = payload.errors["CorrectAnswerIndex"];
        })
    }});

export interface SetAnswerPayload {
    index: number,
    text: string,
}

export const {setFilter, setQuestion} = questionStateSlice.actions;

export default questionStateSlice.reducer;