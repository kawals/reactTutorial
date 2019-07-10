import React, {Component} from 'react';
import Counter from './Counter';
class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  // clickHandler() {
  //   console.log('Click Pressed');
  // }

  // incrementCounter(parameter, evnt) {
  //   // console.log('this', this);
  //   //console.log('evnt', evnt);
  //   console.log('parameter', parameter);
  //   this.setState({
  //     counter:  this.state.counter +1
  //   })
  // }

  incrementCounter() {
    if(this.state.counter > 10) {
      console.log('Already Reached Maximum counter');
    } else {
      this.setState({counter:this.state.counter + 1})
    }
  }

  decrementCounter() {
    if(this.state.counter === 0) {
      console.log('Already Reached Minimum counter');
    } else {
      this.setState({counter:this.state.counter - 1})
    }
  }

  render() {
    return(
      <div>
        <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter}/>
      {/*
      // <h1>Hello Events</h1>
      // <button onClick={this.clickHandler}>Click Me!</button>
      // <button onClick={function() {console.log('First Button');}}>First Button</button>
      // <button onClick={this.incrementCounter.bind(this)}> + </button>
      // &nbsp;
      // <span>{this.state.counter}</span>
      // &nbsp;
      // <button onClick={this.incrementCounter}> + </button>
      // <button onClick={this.incrementCounter.bind(this, 'HelloEvents')}> + </button>
      // <button onClick={this.incrementCounter.bind(this, 'Learning')}> + </button>
      */}
      </div>
    );
  }
}

export default MyEvents;
