import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name:"Kawal"
  };
  changeName = (newName) => {
    this.setState({
      name: newName
    });
  }
  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <br/><br/>
        <div>{this.state.name}</div>
        <br/><br/>
        <button onClick={this.changeName}>Change State</button>
        <button onClick={() => this.changeName('Awesome Agam!')}>Change State using Anonymus function</button>
        <button onClick={this.changeName.bind(this, 'Awesome Agam! :)')}>Change State using bind</button>
        <br/><br/>
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
      </div>
    );
  }
}

export default App;
