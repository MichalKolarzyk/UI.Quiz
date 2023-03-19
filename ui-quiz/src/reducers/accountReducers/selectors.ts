import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export const accountStateSelector = (state: RootState) => state.account;

export const selectIsLogIn = createSelector(accountStateSelector, state => state.token != "" && state.token != undefined && state.token != null )