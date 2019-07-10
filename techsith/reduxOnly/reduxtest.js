const {createStore} = require('redux');

const initialState = {age:21};
const myReducer = (state=initialState, action) => {
  let newState = {...state};
  if(action.type==='ADD') return ++newState.age;
}
const store = createStore(myReducer);
store.dispatch({type:'ADD'});
console.log(store.getState());
