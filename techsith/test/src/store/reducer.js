const initialState = {
  age:30,
  loading: false
};

const reducer = (state=initialState, action) => {
  const newState = {...state};
  if(action.type==='ADD') {return{age:newState.age+action.value}}
  if(action.type==='SUB') {return{age:newState.age-action.value}}
  if(action.type==='LOADING') {newState.loading=true}
  return newState;
}

export default reducer;
