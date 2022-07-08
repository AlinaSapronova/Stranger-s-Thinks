import { Link } from 'react-router-dom'
import React from 'react'
const NavBar = (props) => {
    return (
        <div className="box">
            <Link to="/profile" className='link'>Profile</Link>
            <Link to="/register" className='link'>Register</Link>
            <Link to="/login" className='link'>Login</Link>
            <Link to="/Posts" className='link'>Posts</Link>
        </div>
    )
}  

export default NavBar 