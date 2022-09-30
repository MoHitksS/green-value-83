import LogIn from '../Pages/LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from '../Components/Help'
import SignIn from '../Pages/SignIn'
import SinglePage from '../Components/SinglePage'
import ProductPage from '../Pages/ProductPage'
import Homepage from './Homepage'
import Cart from '../Components/Pages/Cart'
import Checkout from '../Components/Pages/Checkout'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/product/:id' element={<SinglePage/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/products/men1' element={<ProductPage />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
    </Routes>
  )
}

export default AllRoutes