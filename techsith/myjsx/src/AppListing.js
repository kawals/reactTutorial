import React, { Component } from 'react';
import './App.css';
import Listing from './components/listing'

class App extends Component {
  state = {
    lists:[
      {name: 'Kamal', age:20},
      {name: 'John', age:22},
      {name: 'Swam', age:29},
      {name: 'Kirat', age:30}
    ]
  }

  delMethod = () => {

  }

  render() {
    return (
      <div className="App">
      <ul>
      {
        this.state.lists.map(list => {
          return (
            <Listing age={list.age} delEvent="this.delMethod">{list.name}</Listing>
          )
        })
      }
      </ul>
      </div>
    );
  }
}

export default App;
