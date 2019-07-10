import React, {Component} from 'react';

class Logger extends Component{
  constructor(props) {
    super(props);
    console.log('Constructor running');
  }

  componentWillMount() {
    console.log('Component Will Mount');
  }

  componentDidMount() {
    console.log('Component did Mount');
  }

  componentWillReceiveProps(newProps) {
    console.log('NEW Props:', newProps);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('newProps', newProps);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will Update');
    console.log('newProps', nextProps);
    console.log('newState', nextState);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log('Component did Update');
    console.log('oldProps', oldProps);
    console.log('oldState', oldState);
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {
    console.log('Render Method');
    return(
      <h1>{this.props.time}</h1>
    );
  }
}

export default Logger;
