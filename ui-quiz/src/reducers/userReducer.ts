import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id?: string;
    accountId?: string;
    userName?: string;
}

const initialState: UserState = {
    id: undefined,
    accountId: undefined,
    userName: undefined,
}

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.accountId = action.payload.accountId;
            state.id = action.payload.id;
            state.userName = action.payload.userName;

        }
    }
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;