import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './static/Navbar'
import Sidebar from './component/reuseable/Sidebar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Category from './pages/Category'
import Footer from './static/Footer'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (

    <BrowserRouter>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/favorite' element={<Favorites />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/logIn' element={<Login />} />
    </Routes>
    <Footer />

    </BrowserRouter>
  )
}

export default App