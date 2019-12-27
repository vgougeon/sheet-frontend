import React, { Component } from 'react';
import './page-head.sass'
class PageHead extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      height: props.height || 260
    }
  }
  render() { 
    return (  
      <div className="p-head" style={{ height: this.state.height}}>
        <div className="p-content">
          {this.props.children}
        </div>
        <div className="page-head">
        </div>
      </div>
    );
  }
}
export default PageHead;