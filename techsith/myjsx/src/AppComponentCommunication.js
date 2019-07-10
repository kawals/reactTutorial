// Component Communication
import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/parent'

class App extends Component {
  state = {
    title: 'Parent To Child, Kamaal ho gai!'
  };

  doWhatEver = (newTitle) => {
    this.setState({title: newTitle})
  }
  render() {
    return (
      <div className="App">
        <Parent
          doWhatEver={this.doWhatEver.bind(this, 'Sab theek hai ji!')}
          changeWorld={this.doWhatEver.bind(this, 'Change the World')}
          KeepWorldSame={this.doWhatEver.bind(this, 'Keep the World Same')}
          title={this.state.title}/>
      </div>
    );
  }
}

export default App;
