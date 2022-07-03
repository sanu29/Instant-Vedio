import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


let initialState = {
    filteredBy : 'All'
}


export const filteredSlice = createSlice({
    name:'filteredSlice',
    initialState,
    reducers:{
        All: (state)=>{state.filteredBy='All'},
        Sports:(state)=>{state.filteredBy='Sports'},
        Kids : (state)=>{state.filteredBy='Kids'},
        WebSeries : (state)=>{state.filteredBy='WebSeries'},
        Knowledge : (state) =>{state.filteredBy='Knowledge'},
        Movies : (state)=>{state.filteredBy='Movies'}
    }
})

export const {All,Sports,Kids,WebSeries,Knowledge,Movies} = filteredSlice.actions
export default filteredSlice.reducer