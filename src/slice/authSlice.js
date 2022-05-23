import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {axios} from "axios"
let initialState={
   user:"none",
   encodedToken:"none",
   error:"none",
   isLogin:false
}

export const Signup=createAsyncThunk(
    'auth/signup', 
    async(signupData, thunkAPI)=>{
        const response = axios.post(`/api/auth/signup`,signupData);
        console.log(response.data)
        return response.data;
    }
) 


export const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:{
        [Signup.pending]:(state)=>{state.loading=true},
        [Signup.fulfilled]:(state,action)=>{
                state.loading=false
                state.user=action.payload.createdUser
                state.encodedToken=action.payload.encodedToken
                localStorage.setItem('token',state.encodedToken)
                localStorage.setItem('user', JSON.stringify(state.user))
                console.log(state)
        }
    }
})
export default authSlice.reducer