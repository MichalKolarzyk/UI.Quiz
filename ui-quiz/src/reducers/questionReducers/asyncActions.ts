import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import {
  CreateQuestionRequest,
  FilterQuestionsRequest,
  UpdateQuestionRequest,
} from "../../apis/apiQuiz/ApiQuizModels";
import { AppNotificationType, useNotifications } from "../../notifications";

export const createQuestion = createAsyncThunk("createQuestion", async (request: CreateQuestionRequest, thunkAPI) => {
  const notify = useNotifications();
  try {
    const response = await ApiQuizInstance.createQuestion(request);
    notify.add({ message: "Question created", type: AppNotificationType.correct });
    return response.data;
  } catch (err: any) {
    notify.add({ message: "Some informations are invalid", type: AppNotificationType.error });
    return thunkAPI.rejectWithValue(err?.response?.data);
  }
});

export const getQuestionById = createAsyncThunk("getQuestionById", async (request: string, thunkAPI) => {
  try {
    const response = await ApiQuizInstance.getQuestionById(request);
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err?.response?.data);
  }
});

export const updateQuestion = createAsyncThunk("updateQuestion", async (request: UpdateQuestionRequest, thunkAPI) => {
  try {
    const response = await ApiQuizInstance.updateQuestion(request);
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err?.response?.data);
  }
});

export const getQuestions = createAsyncThunk("getQuestions", async (request: FilterQuestionsRequest, thunkAPI) => {
  try {
    const response = await ApiQuizInstance.getQuestions(request);
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err?.response?.data);
  }
});
