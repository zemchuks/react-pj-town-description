import React from 'react'
import './Navbar.scss'
import logo from '../../logo.png'


export default function Navbar() {
    return <nav className="nav-wrapper blue">
        <div className="container">
            <img src={logo} alt="city tour logo" className="z-depth-0" />

            <a href="/" className="sidenav-trigger right" data-target="mobile-menu">
                <i className="fa fa-navicon"></i></a>

            <a href="/" className="brand-logo">City Tours</a>
            <ul className="right nav-links hide-on-med-and-down">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link active">Tours</a></li>
            </ul>
            <ul className="sidenav grey sidebar-mobile" id="sidebar-mobile">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Tours</a></li>
            </ul>

        </div>
    </nav>
}