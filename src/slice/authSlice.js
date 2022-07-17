import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


let initialState={
   user:JSON.parse(localStorage.getItem("user"))||"none",
   encodedToken:localStorage.getItem("token") ||"none",
   error:"none",
   isLogin:localStorage.getItem("user")?true:false
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
export const LoginThunk = createAsyncThunk('auth/login',
    async(loginData,thunkAPI) =>{
        try{
            const response = await axios.post(`/api/auth/login`,loginData)
            return response.data
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        Logout: (state)=>{
                state.loading=false
                state.isLogin = false;
                state.user="none"
                state.encodedToken="none"
                localStorage.clear()  
        }
    },
    extraReducers:{
        [SignupThunk.pending]:(state)=>{
            state.loading=true;
        //console.log(state.loading)
    },
        [SignupThunk.fulfilled]:(state,action)=>{
                state.loading=false
                state.isLogin = true;
                state.user=action.payload.createdUser
                state.encodedToken=action.payload.encodedToken
                localStorage.setItem('token',state.encodedToken)
                localStorage.setItem('user', JSON.stringify(state.user));    
        },
        [SignupThunk.rejected]:(state,action)=>{
            state.loading=false
            state.error = action.payload.errors
        },
        [LoginThunk.pending]:(state)=>{state.loading=true},
        [LoginThunk.fulfilled]:(state,action)=>{
            state.loading=false
            state.isLogin = true;
            state.user=action.payload.foundUser
            //console.log(state.user)
            state.encodedToken=action.payload.encodedToken
            localStorage.setItem('token',state.encodedToken)
            localStorage.setItem('user', JSON.stringify(state.user)); 
        },
        [LoginThunk.rejected] : (state,action)=>{
            state.loading=false;
            state.error=action.payload.errors
        }
    }
})
export const {Logout} = authSlice.actions
export default authSlice.reducer