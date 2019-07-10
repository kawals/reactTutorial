import React, {Component} from 'react';

class Method extends Component{
  facebookLink() { return 'https://www.facebook.com/agamsmedia' }
  facebookUsername() { return 'Agamsmedia' }
  render() {
    return(
        <a href={this.facebookLink()}>{this.facebookUsername()}</a>
    );
  }
}

export default Method;
