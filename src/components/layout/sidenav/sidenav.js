import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './sidenav.sass'

class Sidenav extends Component {
  state = {  }
  render() { 
    return (  
      <aside>
        <div className="aside-head">
          <span className='light'>Hey</span>
        </div>
        <nav>
        <NavLink exact to="/" activeClassName="selected">
          <div className='icon'>       
            <i className="material-icons">explore</i>
          </div>
          Home
        </NavLink>
        <NavLink to="/sheets" activeClassName="selected">
          <div className='icon'>       
            <i className="material-icons">menu_book</i>
          </div>
          Sheets
        </NavLink>
        <NavLink to="/chords" activeClassName="selected">
          <div className='icon'>       
            <i className="material-icons">audiotrack</i>
          </div>
          Chords
        </NavLink>
        </nav>
      </aside>
    );
  }
}
 
export default withRouter(Sidenav);