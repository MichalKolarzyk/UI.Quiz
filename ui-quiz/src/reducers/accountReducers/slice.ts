import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accountLogIn } from "./asyncActions";
import { Console } from "console";

export interface AccountState {
    token?: string,
    expires?: Date,
    isLoading: boolean,
    error: any,
}

const initialState: AccountState = {
    token: undefined,
    expires: undefined,
    isLoading: false,
    error: null,
}

const accountSlice = createSlice({
    initialState,
    name: "account",
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
    extraReducers : (builder) => {
        builder.addCase(accountLogIn.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.expires = action.payload.expires;
            state.isLoading = false;
        })
        builder.addCase(accountLogIn.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(accountLogIn.rejected, (state, action) => {
            const payload : any = action.payload;
            state.isLoading = false;
            state.error = payload?.errors?.[""]
        })
    }
});

export const {setToken} = accountSlice.actions;

export default accountSlice.reducer;