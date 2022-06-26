import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    category : "loading",
    error:{},
}

export const getAllCategories =  createAsyncThunk(`get/allCategories`, async(thunkAPI)=>{
    try{
        const response = await axios.get(`/api/categories`);
        return response.data.categories;
    }
    catch(error)
    {
       return   thunkAPI.rejectWithValue(error.response.data);
    }
})

export const AllCategoriesSlice = createSlice({
    name:"AllCategoriesSlice",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllCategories.pending] : (state)=>console.log(state.loading),
        [getAllCategories.fulfilled] : (state,action)=>{
            console.log(action.payload)
            state.category = action.payload
        },
        [getAllCategories.rejected] : (state,action)=>{
            console.log(action)
        }
    }
})

export default AllCategoriesSlice.reducer;
