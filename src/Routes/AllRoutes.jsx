import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from '../Components/Help'
import SinglePage from '../Components/SinglePage'
import Homepage from './Homepage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/product/:id' element={<SinglePage/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
    </Routes>
  )
}

export default AllRoutes