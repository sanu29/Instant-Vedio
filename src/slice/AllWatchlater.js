import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { useSelector } from 'react-redux'


let initialState={
    watchlater:'loading',
    error:''
}

export const addToWatchlater=createAsyncThunk(
    'watchlater/add', 
    async(video, thunkAPI)=>{
        try{
            const response = await axios({
                method: 'post',
                url: `/api/user/watchlater`,
                headers: {
                    authorization: localStorage.getItem('token'),
                },
                data: {
                    video: video
                },
            }

            )
           return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
) 


export const getWatchlater=createAsyncThunk(
    'watchlater/get', 
    async(thunkAPI)=>{
        try{
            const response = await axios({
                method: 'get',
                url: `/api/user/watchlater`,
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            }

            )
            return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
) 


export const deleteWatchlater=createAsyncThunk(
    'watchlater/delete', 
    async(videoId,thunkAPI)=>{
        try{
            const response = await axios({
                method: 'delete',
                url: `/api/user/watchlater/${videoId}`,
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            }

            )
            console.log(response.data)
            return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
) 

export const watchlaterSlice  = createSlice({
    name:"watchlaterSlice",
    initialState,
    reducers:{
            },
    extraReducers:{
        [addToWatchlater.pending]:(state)=>{
            state.watchlater='loading';
        console.log(state.watchlater)},
        [addToWatchlater.fulfilled]:(state,action)=>{
                
                state.watchlater=action.payload.watchlater
                console.log(state.watchlater)
        },
        [addToWatchlater.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        },
        [getWatchlater.pending]:(state)=>{
            state.watchlater='loading';
        },
        [getWatchlater.fulfilled]:(state,action)=>{
                
                state.watchlater=action.payload.watchlater;
                console.log(state.watchlater)
                     
        },
        [getWatchlater.rejected]:(state,action)=>{
                       state.error = action.payload
        },
        [deleteWatchlater.pending]:(state)=>{
            state.watchlater='loading';
        console.log(state.watchlater)},
        [deleteWatchlater.fulfilled]:(state,action)=>{
                
                state.watchlater=action.payload.watchlater
        },
        [deleteWatchlater.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        }
    }
})
export default watchlaterSlice.reducer