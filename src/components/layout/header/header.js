import React, { Component } from 'react';
import './header.sass'
const Header = () => {
  return (  
    <header>
      <div>
        <img className="logo" src="logo.png" />
        <span className="bold">Sheets </span>
        <span className="ml-1 light">2020</span>
      </div>
    </header>
  );
}
 
export default Header;