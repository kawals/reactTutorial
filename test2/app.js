class firstComponent extends React.Component {
  render() {
    var h1 = React.createElement('h1', null, 'Yahoo!');
    var p = React.createElement('p', null, 'Blaa blaa');
    return React.createElement('div', null, h1, p);
  }
}

var firstElement = React.createElement(firstComponent, null);
var content = document.getElementById('content');
ReactDOM.render(firstElement, content);
