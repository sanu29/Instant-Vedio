import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"
import AllVedioSlice from '../slice/AllVedioSlice'
export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        AllVedioSlice:AllVedioSlice
    },
})