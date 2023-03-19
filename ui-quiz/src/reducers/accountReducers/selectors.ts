import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export const accountState = (state: RootState) => state.account;

export const selectIsLogIn = createSelector(accountState, state => state.token != "" && state.token != undefined && state.token != null )

export const seletToken = createSelector(accountState, state => state.token);

export const selectAccountIsLoading = createSelector(accountState, state => state.isLoading);