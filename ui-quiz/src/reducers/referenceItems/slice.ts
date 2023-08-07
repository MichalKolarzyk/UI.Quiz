import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { getCategories } from "./asyncActions";
import { ReferenceItems } from "../../apis/apiQuiz/models/GetReferenceItems";

export interface ReferenceItemsState {
  categories?: Array<ReferenceItems>;
}

const initialState: ReferenceItemsState = {
  categories: undefined,
};

export const slice = createSlice({
  initialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
    })
}});

export const { } = slice.actions;

export default slice.reducer;

export const referenceItemsStateSelector = (state: RootState) => state.referenceItems;
