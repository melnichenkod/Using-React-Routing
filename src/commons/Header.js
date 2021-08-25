import React from 'react';
import { NavLink } from 'react-router-dom';
import endpoints from '../utils/endpoints';

export default function Header() {
  return (
    <header>
      {endpoints.map(({endpoint, title}) => (
        <NavLink key={endpoint} to={`/${endpoint}`}>{title}</NavLink>
      ))}
    </header>
  )
}
