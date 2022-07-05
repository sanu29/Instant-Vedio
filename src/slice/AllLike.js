import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { useSelector } from 'react-redux'


let initialState={
    likes:'loading',
    error:''
}

export const addToLikes=createAsyncThunk(
    'like/add', 
    async(video, thunkAPI)=>{
        try{
            const response = await axios({
                method: 'post',
                url: `/api/user/likes`,
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


export const getLikes=createAsyncThunk(
    'likes/get', 
    async(thunkAPI)=>{
        try{
            const response = await axios({
                method: 'get',
                url: `/api/user/likes`,
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


export const deleteLikes=createAsyncThunk(
    'likes/delete', 
    async(videoId,thunkAPI)=>{
        try{
            const response = await axios({
                method: 'delete',
                url: `/api/user/likes/${videoId}`,
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

export const likesSlice  = createSlice({
    name:"likesSlice",
    initialState,
    reducers:{
            },
    extraReducers:{
        [addToLikes.pending]:(state)=>{
         
        console.log(state.likes)},
        [addToLikes.fulfilled]:(state,action)=>{
                
                state.likes=action.payload.likes
                console.log(state.likes)
        },
        [addToLikes.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        },
        [getLikes.pending]:(state)=>{
            state.likes='loading';
        },
        [getLikes.fulfilled]:(state,action)=>{
                
                state.likes=action.payload.likes;
                console.log(state.likes)
                     
        },
        [getLikes.rejected]:(state,action)=>{
                       state.error = action.payload
        },
        [deleteLikes.pending]:(state)=>{
        
        console.log(state.likes)},
        [deleteLikes.fulfilled]:(state,action)=>{
                
                state.likes=action.payload.likes
        },
        [deleteLikes.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        }
    }
})
export default likesSlice.reducer