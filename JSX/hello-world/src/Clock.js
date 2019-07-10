import React, { Component } from 'react';
// import Digitalclock from './Digitalclock';
// import Analogclock from './Analogclock';
import Logger from './Logger';
// It is stateful Component having the class

class Clock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
      counter: 0
    }
    this.updateTime();
  }
  updateTime() {
    setInterval(()=>{
      this.setState({
        currentTime: new Date().toLocaleString(),
        counter: this.state.counter + 1
       })
    }, 1000)
  }
  render() {
    return(
        <div>
        {/* <h1>{this.state.currentTime}</h1>
            <Digitalclock time = {this.state.currentTime} />
            <Analogclock time = {this.state.currentTime} /> */}
        {
          (this.state.counter < 2)? <Logger time = {this.state.currentTime}/>: null
        }
        </div>
    );
   }
}

export default Clock;
