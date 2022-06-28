import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { useSelector } from 'react-redux'


let initialState={
    history:'loading'
}

export const addToHistory=createAsyncThunk(
    'history/add', 
    async(video, thunkAPI)=>{
        try{
            const response = await axios({
                method: 'post',
                url: `/api/user/history`,
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


export const getHistory=createAsyncThunk(
    'history/get', 
    async(thunkAPI)=>{
        try{
            const response = await axios({
                method: 'get',
                url: `/api/user/history`,
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


export const deleteHistory=createAsyncThunk(
    'history/delete', 
    async(videoId,thunkAPI)=>{
        try{
            const response = await axios({
                method: 'delete',
                url: `/api/user/history/${videoId}`,
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


export const deleteHistoryAll=createAsyncThunk(
    'history/deleteAll', 
    async(videoId,thunkAPI)=>{
        try{
            const response = await axios({
                method: 'delete',
                url: `/api/user/history/all`,
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


export const historySlice  = createSlice({
    name:"historySlice",
    initialState,
    reducers:{
            },
    extraReducers:{
        [addToHistory.pending]:(state)=>{
            state.history='loading';
        console.log(state.history)},
        [addToHistory.fulfilled]:(state,action)=>{
                
                state.history=action.payload.history
        },
        [addToHistory.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        },
        [getHistory.pending]:(state)=>{
            state.history='loading';
        },
        [getHistory.fulfilled]:(state,action)=>{
                
                state.history=action.payload.history
                     
        },
        [getHistory.rejected]:(state,action)=>{
                       state.error = action.payload
        },
        [deleteHistory.pending]:(state)=>{
            state.history='loading';
        console.log(state.history)},
        [deleteHistory.fulfilled]:(state,action)=>{
                
                state.history=action.payload.history
        },
        [deleteHistory.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        },
        [deleteHistoryAll.pending]:(state)=>{
            state.history='loading';
        console.log(state.history)},
        [deleteHistoryAll.fulfilled]:(state,action)=>{
                
                state.history=action.payload.history
        },
        [deleteHistoryAll.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        }
    }
})
export default historySlice.reducer