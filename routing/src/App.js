import React, { Component } from 'react'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
          <Route path='/' component={Home} exact/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
