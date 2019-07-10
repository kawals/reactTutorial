import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

/*applyMiddleware*/
import { applyMiddleware } from 'redux';
const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in the middleware ${JSON.stringify(result)}`);
    };
  };
};
const store = createStore(reducer, applyMiddleware(logAction));
/*End of applyMiddleware*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
