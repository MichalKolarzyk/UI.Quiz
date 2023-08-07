import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { FilterQuestionsRequest } from "../../apis/apiQuiz/models/FilterQuestions";


export const getQuestions = createAsyncThunk("getQuestions", async (request: FilterQuestionsRequest, thunkAPI) => {
  try {
    const response = await ApiQuizInstance.getQuestions(request);
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err?.response?.data);
  }
});
