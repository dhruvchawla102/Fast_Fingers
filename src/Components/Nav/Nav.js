import React from 'react'
import '../Nav/Nav.css';
import logo from './../../Assets/logo.svg'

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="" className="logo" />
                <a href="/fast-fingers/"><p className="logo-text">Fast Fingers</p></a>
            </div>
            
        </div>
    )
}

export default Nav
