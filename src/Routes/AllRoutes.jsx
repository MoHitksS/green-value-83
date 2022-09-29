import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
  )
}

export default AllRoutes