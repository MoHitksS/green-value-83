import LogIn from '../Routes/LogIn'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from '../Components/Help'
import SignIn from '../Routes/SignIn'
import SinglePage from '../Components/SinglePage'
import ProductPage from '../Routes/ProductPage'
import Homepage from './Homepage'
import Cart from '../Components/Cart'
import Checkout from '../Components/Checkout'
import Companylogin from './Company'
import Search from '../Components/Search'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/product/:id' element={<SinglePage />}></Route>
      <Route path='/help' element={<Help />}></Route>
      <Route path='/company' element={<Companylogin/>}></Route>
      <Route path='/login' element={<LogIn />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/products' element={<ProductPage />}></Route>
      <Route path='/search' element={<Search />}></Route>
    </Routes>
  )
}

export default AllRoutes