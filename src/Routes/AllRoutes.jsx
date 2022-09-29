import LogIn  from '../Pages/LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signin' element={<SignIn/>} />
    </Routes>
  )
}

export default AllRoutes