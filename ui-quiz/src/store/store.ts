import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import accountReducer from '../reducers/accountReducers/slice'
import userReducer from '../reducers/userReducer'
import registrationReducer from '../reducers/registrationReducers/slice'
import createQuestionReducer from '../reducers/questionReducers/slice'
import notificationReducer from '../notifications/reducer/slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        account: accountReducer,
        registration: registrationReducer,
        createQuestion: createQuestionReducer,
        nofifications: notificationReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();