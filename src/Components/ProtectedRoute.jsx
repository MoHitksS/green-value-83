import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isAuth} = useSelector((store)=>(store.AuthReducer));
    if(!isAuth){
        return <Navigate to='/login'/>
    }

  return children
}

export default ProtectedRoute