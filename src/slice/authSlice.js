import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


let initialState={
    name:"signup",
   user:localStorage.getItem("user")||"none",
   encodedToken:localStorage.getItem("token") ||"none",
   error:"none",
   isLogin:false
}

export const SignupThunk=createAsyncThunk(
    'auth/signup', 
    async(signupData, thunkAPI)=>{
        try{
            const response = await axios.post(`/api/auth/signup`,signupData);
            return response.data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
) 


export const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:{
        [SignupThunk.pending]:(state)=>{state.loading=true
        console.log(state.loading)},
        [SignupThunk.fulfilled]:(state,action)=>{
                state.loading=false
                state.user=action.payload.createdUser
                state.encodedToken=action.payload.encodedToken
                localStorage.setItem('token',state.encodedToken)
                localStorage.setItem('user', JSON.stringify(state.user));    
        },
        [SignupThunk.rejected]:(state,action)=>{
            state.loading=false
            state.error = action.payload.errors
        }
    }
})
export default authSlice.reducer