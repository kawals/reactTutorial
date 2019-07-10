import React, { Component } from 'react';
import './App.css';

class Helloworld extends Component {
  decoration = {
    textDecoration: 'none'
  }
  render(){
    //Not recommended
    const fontsize = {
      fontSize: '26px',
      backgroundColor: 'orange'
    }
    return(
      <a href={this.props.link} style={{backgroundColor:'green'}} style={this.decoration} style={fontsize}>{this.props.linkText}</a>
    );
  }
}
export default Helloworld;
