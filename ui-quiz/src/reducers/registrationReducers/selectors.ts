import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export const registrationStateSelector = (state: RootState) => state.registration;

export const registrationErrors =  createSelector(registrationStateSelector, state => state.error)