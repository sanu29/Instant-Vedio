import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export  function PrivateRoutes({children}) {
    const isLogin = useSelector((state)=>state.authReducer)
    //console.log(isLogin.isLogin)
    return isLogin.isLogin?<Outlet/>:<Navigate to={"/login"}/>
}
