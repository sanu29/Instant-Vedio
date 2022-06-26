import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"
import AllVedioSlice from '../slice/AllVedioSlice'
import AllCategoriesSlice from '../slice/AllCategoriesSlice'
import filteredSlice from '../slice/filteredSlice'
export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        AllVedioSlice:AllVedioSlice,
        AllCategoriesSlice:AllCategoriesSlice,
        filteredSlice:filteredSlice
    },
})