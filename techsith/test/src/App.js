import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './store/action';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p style={{height:50}}>
          {this.props.loading && <img src={logo} className='App-logo'/>}
        </p>
        <button onClick={this.props.onAgeUp}>AgeUp</button>
        &nbsp;{this.props.age}&nbsp;
        <button onClick={this.props.onAgeDown}>AgeDown</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age:state.age,
    loading: state.loading
  }
}

const mapdispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(App);
