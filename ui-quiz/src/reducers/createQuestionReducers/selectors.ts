import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export const createQuestionStateSelector = (state: RootState) => state.createQuestion;
