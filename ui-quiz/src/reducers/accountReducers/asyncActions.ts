import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { ISignInRequest } from "../../apis/apiQuiz/ApiQuizModels";

export const accountLogIn = createAsyncThunk("login", async (request: ISignInRequest, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.signIn(request)
        return response.data;
    }
    catch(err : any){
        console.log(err);
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})
