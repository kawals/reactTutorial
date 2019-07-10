import React, {Component} from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      allusers: [],
      radioGroup: {
        Meanstack: false,
        Mernstack: true,
        Lampstack: false
      },
      checkboxGroup: {
        ReactJS: false,
        Node: true,
        MonoDB: false
      },
      selectedvalue: 'Node'
    }
    this.formHandler = this.formHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
  }

  formHandler(event) {
    this.setState({
      username : event.target.value
    })
  }

  clickHandler(event) {
    let currentuser = this.state.allusers;
    currentuser.push(this.state.username);
    this.setState({
      allusers: currentuser,
      username: ''
    });
    console.log(this.state.allusers);
  }

  radioHandler(event) {
    let radioGroup = this.state.radioGroup;
    for(var key in radioGroup) {
      radioGroup['key'] = false
    }
    radioGroup[event.target.value] = event.target.checked;
    this.setState({
      radioGroup: radioGroup
    })
    console.log(event.target.value);
  }

  checkboxHandler(event) {
    let checkbox = this.state.checkboxGroup;
    checkbox[event.target.value] = event.target.checked;
    this.setState({
      checkboxGroup: checkbox
    })
  }

  selectHandler(event) {
    console.log(event.target.value);
    this.setState({
      selectedvalue: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>Forms</h1>
        <input type="text" name="username" value={this.state.username} onChange={this.formHandler}/>
        <p>Developer Type</p>
        <label>
          Mean Stack <input type="radio" name="developertype" value="Meanstack" checked={this.state.radioGroup['Meanstack']} onChange={this.radioHandler}/>
        </label>
        <label>
          Mern Stack <input type="radio" name="developertype" value="Mernstack" checked={this.state.radioGroup['Mernstack']} onChange={this.radioHandler}/>
        </label>
        <label>
          Lamp Stack <input type="radio" name="developertype" value="Lampstack" checked={this.state.radioGroup['Lampstack']} onChange={this.radioHandler}/>
        </label>
        <p>Technology</p>
        <label>
          ReactJS <input type="checkbox" name="tech" value="ReactJS" checked={this.state.checkboxGroup['ReactJS']} onChange={this.checkboxHandler}/>
        </label>
        <label>
          Node <input type="checkbox" name="tech" value="Node" checked={this.state.checkboxGroup['Node']} onChange={this.checkboxHandler}/>
        </label>
        <label>
          MonoDB <input type="checkbox" name="tech" value="MonoDB" checked={this.state.checkboxGroup['MonoDB']} onChange={this.checkboxHandler}/>
        </label>
        <br/>
        <select value={this.state.selectedvalue} onChange={this.selectHandler}>
          <option value="Ruby">Ruby</option>
          <option value="Node">Node</option>
          <option value="Python">Python</option>
        </select>
        <button onClick={this.clickHandler}>Save</button>
      </div>
    );
  }
}

export default Forms;
