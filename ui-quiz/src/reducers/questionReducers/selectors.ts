import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export const questionStateSelector = (state: RootState) => state.createQuestion;
