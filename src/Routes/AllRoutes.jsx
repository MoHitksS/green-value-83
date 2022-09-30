import LogIn from '../Pages/LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SinglePage from '../Components/SinglePage'
import ProductPage from '../Pages/ProductPage'
import Homepage from './Homepage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/product/:id' element={<SinglePage />}></Route>
      <Route path='/products/men1' element={<ProductPage />}></Route>
    </Routes>
  )
}

export default AllRoutes