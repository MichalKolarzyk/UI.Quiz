import { createSlice } from "@reduxjs/toolkit";

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
    }
});

export const {registrationClearLoginError} = registrationSlice.actions;

export default registrationSlice.reducer;