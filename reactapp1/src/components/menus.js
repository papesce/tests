import HomeIcon from 'react-icons/lib/fa/home'
import React from 'react'
import {NavLink} from 'react-router-dom'
import './menus.css'

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray'
}

export const MainMenu = () =>
  <nav className="main-menu">
    <NavLink to="/">
      <HomeIcon/>
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
        [About]
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
        [Events]
    </NavLink>
    <NavLink to="/products" activeStyle={selectedStyle}>
        [Products]
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
        [Contact Us]
    </NavLink>
  </nav>    