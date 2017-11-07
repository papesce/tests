import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () =>  
  <section className="home">
    <h1>[Company Website]</h1>
    <nav>
      <Link to="about">[About]</Link>
      <Link to="events">[Events]</Link>
      <Link to="products">[Products]</Link>
      <Link to="contact">[Contact]</Link>
    </nav>
  </section> 
  
export const About = () => 
  <section className="about">
    <h1>[About the company]</h1>
  </section> 

export const Events = () => 
  <section className="events">
    <h1>[Events Calendar]</h1>
  </section> 

export const Products = () => 
  <section className="products">
    <h1>[Products Catalog]</h1>
  </section> 

export const Contact = () => 
  <section className="contact">
    <h1>[Contact Us]</h1>
  </section> 

export const Whoops404 = ({ location }) => 
  <div className="whoops-404">
    <h1>Resource not found at `{location.pathname}`</h1>
  </div> 