import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink exact to='/'>Home</NavLink> ||
        <NavLink to='/films'>films</NavLink> || 
        <NavLink to='/people'>people</NavLink> ||
        
    </header>
  )
}
