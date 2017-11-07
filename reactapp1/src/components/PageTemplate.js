import {MainMenu} from './menus'
import React from 'react'
import './pages.css'

export const PageTemplate = ({children}) =>
  <div className = "page">
    <MainMenu />
    {children}
  </div>