import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/home'
import CreatePage from './pages/createPage/createProduct'
import DetailPage from './pages/DetailPage/DetailProduct'
import UpdatePage from './pages/UpdatePage/Update'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage/>} />
        <Route path={'/product/:id'} element={<DetailPage/>} />
        <Route path={'/createProduct'} element={<CreatePage/>} />
        <Route path={'/updateProduct/:id'} element={<UpdatePage/>} />
      </Routes>
    </div>
  )
}

export default App
