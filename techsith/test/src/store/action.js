const loading = () => {
  return {type: 'LOADING'}
}

export const ageUpAsnc = (val) => {
  return {type:'ADD', value:val}
}
export const ageUp = val => {
  return dispatch => {
    dispatch(loading())
    setTimeout(()=> {
      dispatch(ageUpAsnc(val))
    }, 2000)
  }
}

export const ageDown = (val) => {
  return {type:'SUB', value:val}
}
