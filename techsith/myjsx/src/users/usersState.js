import React, {Component} from 'react';
import User from './user';

class Users extends Component {
  state = {
    users:[
      {name: "Kawal", age:20},
      {name: "Jeeta", age:40},
      {name: "Soni", age:30}
    ],
    title: 'Sikhde ha!'
  };

  makeMeYounger = () => {
    // this.setState({
    //   users:[
    //     {name: "Kawal", age:10},
    //     {name: "Jeeta", age:30},
    //     {name: "Soni", age:20}
    //   ]
    // });
    // console.log(this.state.users);

    const newState = this.state.users.map(user => {
      return user.age -= 10;
    });

    this.setState({
      newState
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {
          // <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
          // <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
          // <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        this.state.users.map(user => {
          return <User age={user.age}>{user.name}</User>
        })
        }
        <br/>
        <button onClick={this.makeMeYounger}>Make 10 years younger!</button>
      </div>
    );
  }
}

export default Users;
