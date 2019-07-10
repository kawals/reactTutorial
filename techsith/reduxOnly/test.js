const {createStore} = require('redux');

const initialState = {age:30}
const myReducer = (state=initialState, action) => {
  let newState = {...state}
  if(action.type ==='Add') newState.age += action.value
  if(action.type ==='Sub') newState.age -= action.value
  return newState
}
const store = createStore(myReducer)
store.subscribe(()=>{
    console.log('state change:', store.getState())
})

store.dispatch({type:'Add', value:7})
store.dispatch({type:'Sub', value:4})
