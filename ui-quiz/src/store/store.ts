import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../reducers/accountReducer'
import userReducer from '../reducers/userReducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        account: accountReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch