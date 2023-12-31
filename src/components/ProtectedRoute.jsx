import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({Children}) => {
    const{user}=UserAuth()
    if(!user){
        return <Navigate to='/'/>
    }else{
        return Children
    }
}

export default ProtectedRoute