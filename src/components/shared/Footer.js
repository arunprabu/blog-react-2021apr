import React from 'react';
import Menu from './Menu';

// Functional Comp with Anonymous Fn 
const Footer = function(){

  const copyrightYear = 2021;

  //Comp specific CSS inside the Function  (Internal styles)
  let footerStyles = {
    copyrightStyle: {
      backgroundColor: 'red',
      padding: '10px',
      color: '#fff',
      fontSize: '20px'
    },
    devStyle: {
      backgroundColor: 'green',
      padding: '10px',
      color: '#fff',
      fontSize: '20px'
    }
  }

  return(
    <footer>
      <hr />
      <Menu></Menu>
      <p style={{color:'grey'}}>Made during second wave</p>
      <p style={footerStyles.devStyle}>Developed in a React JS training</p>
      <p style={footerStyles.copyrightStyle}>Copyright {copyrightYear} - Arun</p>
      
    </footer>
  )
}

export default Footer;