import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AccountState {
    token?: string,
    isLogIn: boolean,
}

const initialState: AccountState = {
    token: undefined,
    isLogIn: false,
}

export const accountSlice = createSlice({
    initialState,
    name: "account",
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setIsLogIn: (state, action: PayloadAction<boolean>) => {
            state.isLogIn = action.payload;
        }
    }
});

export const {setToken, setIsLogIn} = accountSlice.actions;

export default accountSlice.reducer;