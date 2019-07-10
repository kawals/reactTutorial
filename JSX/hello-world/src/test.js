import React, {Component} from 'react';

class Hello extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.increment}>+</button>
        {this.props.count}
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
export default Hello
