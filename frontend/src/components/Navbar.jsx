import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {

    const navLinks = [
      {path: '/', title: 'Home'},
      {path: '/collection', title: 'Collection'},
      {path: '/testimonial', title: 'Testimonial'},
      {path: '/mailto:info@evostep.com', title: 'Contact'},
    ]
  return (
    <nav className={'${containerStyles}'}>
      {navLinks.map((link)=>(
        <NavLink
        key={link.title}
        to={link.path}
        // className={({isActive})=> '${isActive ? "active-link"}'}
        >
        {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
