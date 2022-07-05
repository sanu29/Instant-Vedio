import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slice/authSlice"
import AllVedioSlice from '../slice/AllVedioSlice'
import AllCategoriesSlice from '../slice/AllCategoriesSlice'
import filteredSlice from '../slice/filteredSlice'
import AllHistory from '../slice/AllHistory'
import AllWatchlater from '../slice/AllWatchlater'
import AllLike from '../slice/AllLike'
import AllPlaylist from '../slice/AllPlaylist'
export const store = configureStore({
    reducer:{
        authReducer:authReducer,
        AllVedioSlice:AllVedioSlice,
        AllCategoriesSlice:AllCategoriesSlice,
        filteredSlice:filteredSlice,
        AllHistory:AllHistory,
        AllWatchLater:AllWatchlater,
        AllLike:AllLike,
        AllPlaylist : AllPlaylist
    },
})