const initialState = {
  age: 21,
};

const reducer = (state=initialState, action) => {
  const newState = {...state};
  if(action.type === 'AGE_UP') {
    return {
      ...state,
      age: state.age + action.value,
    }
  }
  if(action.type === 'AGE_DOWN') {
    return {
      ...state,
      age: state.age - action.value,
    }
  }
  return newState;
}

export default reducer;
