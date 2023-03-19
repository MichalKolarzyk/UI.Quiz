import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accountLogIn } from "./asyncActions";

export interface AccountState {
    token?: string,
    isLoading: boolean
    error: any
}

const initialState: AccountState = {
    token: undefined,
    isLoading: false,
    error: null,
}

export const accountSlice = createSlice({
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
            state.isLoading = false;
        })
        builder.addCase(accountLogIn.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(accountLogIn.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
});

export const {setToken} = accountSlice.actions;

export default accountSlice.reducer;