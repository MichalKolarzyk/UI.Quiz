import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import accountReducer from '../reducers/accountReducers/slice'
import userReducer from '../reducers/userReducer'
import createQuestionReducer from '../reducers/questionReducers/slice'
import referenceItemsReducer from '../reducers/referenceItems/slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        account: accountReducer,
        createQuestion: createQuestionReducer,
        referenceItems: referenceItemsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();