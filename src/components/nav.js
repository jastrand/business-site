import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Burger } from 'components/Burger'
import { Burger } from 'components/Menu'

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <h1>
        <NavLink to="/">Katrineholms Fönsterservice</NavLink>
      </h1>

      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}