import React, { Component } from 'react';

class Counter extends Component {
    render() {
      console.log(this.props);
    return (
      <div>
        <h1>Ma Counter</h1>
        <button onClick={this.props.increment}>+</button>
        {this.props.counter}
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}

export default Counter;
