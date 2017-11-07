import React from 'react'
import {NavLink} from 'react-router-dom'

export const AboutMenu = ({match}) => 
  <div className="about-menu">
    <li>
      <NavLink to="/about">[Company]
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/history">[History]
      </NavLink>
    </li>
        

  </div>


export const Company = () => 
  <div> 
      Company
  </div>

export const History = () => 
  <div> 
    History
  </div>