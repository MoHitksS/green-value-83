import LogIn from '../Routes/LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from '../Components/Help'
import SignIn from '../Routes/SignIn'
import SinglePage from '../Components/SinglePage'
import ProductPage from '../Routes/ProductPage'
import Homepage from './Homepage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/product/:id' element={<SinglePage/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/products' element={<ProductPage />}></Route>
    </Routes>
  )
}

export default AllRoutes