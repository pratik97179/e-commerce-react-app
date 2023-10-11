import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-links'>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>

        <div className='cart'>
        <a href='/cart'> My Cart</a>
      </div>
      </div>
    </nav>
  )
}

export default Navbar