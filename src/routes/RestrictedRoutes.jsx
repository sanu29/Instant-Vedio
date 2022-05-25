
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export function RestrictedRoutes({children}) {

    const isLogin = useSelector((state)=>state.authReducer)
    return isLogin.isLogin?<Navigate to={'/'}/>:<Outlet/>
}
