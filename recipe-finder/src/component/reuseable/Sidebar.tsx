
  import React from 'react'
import Home from '../../pages/Home'
import { NavLink } from 'react-router-dom'
import Category from '../../pages/Category'
import Favorites from '../../pages/Favorites'
import Login from '../../pages/Login'
  
  const Sidebar = () => {
    return (
      <div className='bg-yellow'>
        
       <NavLink to='/'><Home /></NavLink> 
       <NavLink to='/category'><Category /> </NavLink> 
       <NavLink to='/Favorite'><Favorites /></NavLink> 
       <NavLink to='/logIn'><Login /></NavLink> 
      </div>
    )
  }
  
  export default Sidebar
  
