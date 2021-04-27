import React from 'react';
import Menu from './Menu';
import logo from '../../assets/images/blog-logo.png';

// Functional Comp with Named Fn 
function Header() {

  let appName = 'My Blog App';

  // Return JSX
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#"><img src={logo} width='32'/>{appName}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <Menu></Menu>
      </div>
    </nav>
  );
}

export default Header;