// class CustomComponent extends React.Component {
//   render(){
//     return React.createElement('h1',null, 'My first component');
//   }
// }

// var h1 = React.createElement('h1', null, 'Yahoo!');
// var p = React.createElement('p', null, 'Getting better and learning React');
// class CustomComponent extends React.Component {
//   render() {
//     return(
//       React.createElement('div', null, h1, p)
//     );
//   }
// }
//
// var firstComponent = React.createElement(CustomComponent,null);
// var content = document.getElementById('content');
// ReactDOM.render(firstComponent ,content);

class CustomLink extends React.Component {
  render(){
    return(
      React.createElement('a', this.props, this.props.linktext)
    );
  }
}

var myLinks = React.createElement('div', null,
  React.createElement(CustomLink, {href:'http://google.ca', title: 'Google', linktext: ' Google'}),
  React.createElement(CustomLink, {href:'http://facebook.com', title: 'Facebook', linktext: ' Facebook'}),
  React.createElement(CustomLink, {href:'http://youtube.com', title: 'Youtube', linktext: ' Youtube'})
);
var content = document.getElementById('content');
ReactDOM.render(myLinks, content);
