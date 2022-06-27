import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    vedioList : "loading",
    error:{},
}


export const getAllVedios =  createAsyncThunk(`get/allVedios`, async(thunkAPI)=>{
    try{
        const response = await axios.get(`/api/videos`);
        return response.data.videos;
    }
    catch(error)
    {
       return   thunkAPI.rejectWithValue(error.response.data);
    }
})

export const AllVedioSlice = createSlice({
    name:"AllVedioSlice",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllVedios.pending] : (state)=>console.log(state.loading),
        [getAllVedios.fulfilled] : (state,action)=>{
            //console.log(action.payload)
            state.vedioList = action.payload
        },
        [getAllVedios.rejected] : (state,action)=>{
            //console.log(action)
            // state.error = action.payload
        }
    }
})

export default AllVedioSlice.reducer;
