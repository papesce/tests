import React from 'react'
import {Link, Route} from 'react-router-dom'
import {PageTemplate} from './PageTemplate'
import {AboutMenu, Company, History} from './AboutMenu'

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
  
export const About = ({match}) => 
  <PageTemplate>
    <section className="about">
      <Route component={AboutMenu}/>
      <Route exact path="/about" component={Company} />
      <Route path="/about/history" component={History} />
    </section>
  </PageTemplate> 

export const Events = () => 
 <PageTemplate>
  <section className="events">
    <h1>[Events Calendar]</h1>
  </section> 
  </PageTemplate> 

export const Products = () => 
<PageTemplate>
  <section className="products">
    <h1>[Products Catalog]</h1>
  </section> 
  </PageTemplate> 

export const Contact = () => 
<PageTemplate>
  <section className="contact">
    <h1>[Contact Us]</h1>
  </section> 
  </PageTemplate> 

export const Whoops404 = ({ location }) => 
  <div className="whoops-404">
    <h1>Resource not found at `{location.pathname}`</h1>
  </div> 