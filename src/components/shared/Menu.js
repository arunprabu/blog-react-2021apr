import React from 'react';

// Functional Comp with Arrow fn
const Menu = () => {
  return(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
    </ul>
  )
}

export default Menu;