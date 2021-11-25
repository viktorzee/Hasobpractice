import { configureStore } from '@reduxjs/toolkit'
import {authenticationReducer}  from '../redux/features/userSlice';

export const store = configureStore({
    reducer: {
        userLogin: authenticationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;