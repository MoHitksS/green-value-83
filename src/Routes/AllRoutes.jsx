import LogIn  from '../Pages/LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import AddProduct from '../Pages/AddProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/add' element={<AddProduct/>} />
    </Routes>
  )
}

export default AllRoutes