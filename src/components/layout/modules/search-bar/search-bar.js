import React, { Component } from 'react';
import './search-bar.sass'
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <input type="text" name="search" placeholder="Rechercher artistes / chansons" />
    );
  }
}
 
export default SearchBar;