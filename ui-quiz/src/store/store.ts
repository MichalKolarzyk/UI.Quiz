import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import accountReducer from '../reducers/accountReducers/slice'
import userReducer from '../reducers/userReducer'
import registrationReducer from '../reducers/registrationReducers/slice'
import createQuestionReducer from '../reducers/createQuestionReducers/slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        account: accountReducer,
        registration: registrationReducer,
        createQuestion: createQuestionReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();