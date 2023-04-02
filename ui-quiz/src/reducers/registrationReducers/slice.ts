import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./asyncActions";

export interface RegistrationState {
    userRegistered: boolean;
    isLoading: boolean;
    error: RegistrationErrors,
}

export interface RegistrationErrors {
    repetePassword: string,
    password: string,
    login: string,

}

const initialState: RegistrationState = {
    userRegistered: false,
    isLoading: false,
    error: {
        repetePassword: "",
        password: "",
        login: "",
    }
}

export const registrationSlice = createSlice({
    initialState,
    name: "account",
    reducers: {
        registrationClearLoginError: (state) => {
            state.error.login = "";
        },
    },
    extraReducers : (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.userRegistered = true;
            state.isLoading = false;
        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            const payload : any = action.payload;
            state.isLoading = false;
            state.error.repetePassword = payload.errors["RepetePassword"];
            state.error.password = payload.errors["Password"];
            state.error.login = payload.errors["Login"];
        })
    }
});

export const {registrationClearLoginError} = registrationSlice.actions;

export default registrationSlice.reducer;