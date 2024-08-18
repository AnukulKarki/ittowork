import React from 'react'
import Logo from '../images/Logo.png'
import HamBurger from '../images/Hamburger.png'
import '../styles/NavbarStyle.css'

export default function Navbar() {
  return (
    <>
        <div className='navbar' >
            <div className="logo">
                <img className='img-logo' src={Logo} alt='logo' /> 
            </div>
            <ul class="nav-link" id="nav-link">
                <li>About</li>
                <li>Service</li>
                <li>Pricing</li>
            </ul>

            <div className="hamburger" id="hamburger">
                <img className='hamburger-img' src = {HamBurger} alt='Hamburger Menu' /> 
            </div>

            <div className='right-data'>
                <li>Contact us</li>
            </div>

        </div>
    
    </>

  )
}
