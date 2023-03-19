import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { IRegisterRequest } from "../../apis/apiQuiz/ApiQuizModels";

export const registerUser = createAsyncThunk("register", async (request: IRegisterRequest, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.register(request)
        return response.data;
    }
    catch(err : any){
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})
