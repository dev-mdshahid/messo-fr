import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ icon, name, to }) => {
  const regularStyle =
    'flex items-center px-4 py-3 rounded-l-lg rounded-r border-r-4 border-white';
  const activeStyle =
    'flex items-center px-4 py-3 rounded-l-lg rounded-r bg-blue-100 text-messo border-r-4 border-messo';
  return (
    <NavLink
      to={`${to}`}
      className={({ isActive }) =>
        isActive ? activeStyle : regularStyle
      }
    >
      <span className="text-2xl">{icon}</span>

      <h4 className="text-sm font-semibold ml-3">{name}</h4>
    </NavLink>
  );
};

export default Menu;
