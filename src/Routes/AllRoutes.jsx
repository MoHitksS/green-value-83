import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SinglePage from '../Components/SinglePage'
import Homepage from './Homepage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/product/:id' element={<SinglePage/>}></Route>
    </Routes>
  )
}

export default AllRoutes