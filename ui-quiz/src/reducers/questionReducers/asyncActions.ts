import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { CreateQuestionRequest, FilterQuestionsRequest, IRegisterRequest, UpdateQuestionRequest } from "../../apis/apiQuiz/ApiQuizModels";

export const createQuestion = createAsyncThunk("createQuestion", async (request: CreateQuestionRequest, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.createQuestion(request)
        return response.data;
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})


export const getQuestionById = createAsyncThunk("getQuestionById", async (request: string, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.getQuestionById(request)
        return response.data;
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})

export const updateQuestion = createAsyncThunk("updateQuestion", async (request: UpdateQuestionRequest, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.updateQuestion(request)
        return response.data;
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})


export const getQuestions = createAsyncThunk("getQuestions", async (request: FilterQuestionsRequest, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.getQuestions(request)
        return response.data;
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})
