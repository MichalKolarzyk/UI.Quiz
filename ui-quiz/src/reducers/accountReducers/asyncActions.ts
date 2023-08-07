import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiQuizInstance from "../../apis/apiQuiz/ApiQuizInstance";
import { ISignInRequest } from "../../apis/apiQuiz/models/SignIn";

export const accountLogIn = createAsyncThunk("accountLogIn", async (request: ISignInRequest, thunkAPI)=> {
    try{
        const response = await ApiQuizInstance.signIn(request)
        return response.data;
    }
    catch(err : any){
        console.log(err?.response?.data.errors[""]);
        return thunkAPI.rejectWithValue(err?.response?.data);
    }
})
