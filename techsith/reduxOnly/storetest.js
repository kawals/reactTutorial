// Run following command
// npm init
// npm install redux --save
// node storetest.js

const { createStore } = require('redux');

const initialState = { age:21 };
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  if(action.type === 'ADD') {
    newState.age += action.value;
  }
  if(action.type === 'SUBTRACT') {
    newState.age -= action.value;
  }
  return newState;
}

const store = createStore(myReducer);
store.subscribe(()=>{
  console.log("State Changed" + JSON.stringify(store.getState()));
});
store.dispatch({type:'ADD', value:10});
store.dispatch({type:'SUBTRACT', value:5});
