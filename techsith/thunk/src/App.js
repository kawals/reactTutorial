import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from './store/actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch( actionCreator.ageUp(1) ),
    onAgeDown: () => dispatch( actionCreator.ageDown(1) )
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
