import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <h2>History</h2>
        <div>
          <ul>
            {
              this.props.history.map(val =>(
                <li className="historyItem" key={val.id} onClick={this.props.deleteItem}>
                  {val.age}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age:state.age,
    history:state.history
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type:'AGE_UP', value:1}),
    onAgeDown: () => dispatch({type:'AGE_DOWN', value:1}),
    deleteItem: () => dispatch({type:'DEL_ITEM'})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
