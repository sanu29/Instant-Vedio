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
            const authState = useSelector(state=>state.authReducer)
            console.log(authState.encodedToken)
            const response = await axios({
                method: 'post',
                url: `/api/user/history`,
                headers: {
                    authorization: authState.encodedToken,
                },
                data: {
                    video: video
                },
            }

            )
            console.log('History'+response)
            return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
) 


// export const getHistory=createAsyncThunk(
//     'history/get', 
//     async(thunkAPI)=>{
//         try{
//             const authState = useSelector(state=>state.authReducer)
//             const response = await axios.get(`/api/user/history`,{
//                 authorization : authState.encodedToken,
//                });
//             return response.data;
//         }
//         catch(error){
//             return thunkAPI.rejectWithValue(error.response.data)
//         }
//     }
// ) 
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
                console.log('status'+state.history)

         
        },
        [addToHistory.rejected]:(state,action)=>{
                      state.error = action.payload
                      console.log(action)
        }
        // [getHistory.pending]:(state)=>{
        //     state.history='loading';
        // console.log(state)},
        // [getHistory.fulfilled]:(state,action)=>{
                
        //         state.history=action.payload.history
        //         console.log('status'+state.history)
         
        // },
        // [getHistory.rejected]:(state,action)=>{
        //                state.error = action.payload
        // }
    }
})
export const {Logout} = historySlice.actions
export default historySlice.reducer