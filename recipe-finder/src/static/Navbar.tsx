import React from 'react'
import Logo from '../assets/Logo.png'
import { FcSearch } from "react-icons/fc";
import Button from '../component/reuseable/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='max-w-[1280px] mx-auto bg-white  shadow-lg'>
        <main className='flex justify-between items-center ' >
            <div className=''>
                <img src={Logo} alt='logo' className='h-30 w-auto'/>
            </div>
            
            {/* <input type="text"  placeholder='search your recipe here'> <FcSearch /></input> */}
            <div className='flex gap-8 cursor-pointer'>
                <Link to='/signUp'><Button title='Create account' borderColor=' 2px solid #FE7B23' textColor='black'/></Link>
                
                <Link to='/logIn'><Button title='Log In' bgColor='#FE7B23' textColor='white'/></Link>
            </div>
           

           

        </main>
      
    </div>
  )
}

export default Navbar
