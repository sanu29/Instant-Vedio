import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { useSelector } from 'react-redux'


let initialState={
    playlists:[],
    error:'',
    loading:true
}

export const addToPlaylist=createAsyncThunk(
    'playlist/add', 
    async(playlist, thunkAPI)=>{
        try{
            const response = await axios({
                method: 'post',
                url: `/api/user/playlists`,
                headers: {
                    authorization: localStorage.getItem('token'),
                },
                data: {
                    playlist
                },
            }

            )
            console.log(response)
           return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
) 


export const getPlaylist=createAsyncThunk(
    'playlist/get', 
    async(thunkAPI)=>{
        try{
            const response = await axios({
                method: 'get',
                url: `/api/user/playlists`,
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


export const playlistSlice  = createSlice({
    name:"playlistSlice",
    initialState,
    reducers:{
            },
    extraReducers:{
        [addToPlaylist.pending]:(state)=>{
         
        console.log(state.playlists)},
        [addToPlaylist.fulfilled]:(state,action)=>{
                
                state.playlists=action.payload.playlists
                console.log(state.playlists)
        },
        [addToPlaylist.rejected]:(state,action)=>{
                      state.error = action.payload
                    
        },
        [getPlaylist.pending]:(state)=>{
            state.playlists='loading';
        },
        [getPlaylist.fulfilled]:(state,action)=>{
                
                state.playlists=action.payload.playlists;
                console.log(state.playlists)
                     
        },
        [getPlaylist.rejected]:(state,action)=>{
                       state.error = action.payload
        }
    }
})
export default playlistSlice.reducer