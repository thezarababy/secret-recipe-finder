import React from 'react'
import { Link } from 'react-router-dom'





 const Header = () => {
  return (
    <div>
        <h1>this is the header</h1>
        <main>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register Here</Link>
                <Link to='/login'>Login</Link>
                <Link to='/contact'>Contact Us</Link>

            </div>
            <div>

            </div>
            <div>

            </div>
        </main>
    </div>
  )
}
export default Header
