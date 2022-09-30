import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SinglePage from '../Components/SinglePage'
import ProductPage from '../Pages/ProductPage'
import Homepage from './Homepage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/product/:id' element={<SinglePage/>}></Route>
      <Route path='/products/men1' element={<ProductPage/>}></Route>
    </Routes>
  )
}

export default AllRoutes