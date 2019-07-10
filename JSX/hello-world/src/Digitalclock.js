import React from 'react';
// It is stateless component

function Digitalclock(props) {
  console.log(props.time);
  return <div>{props.time}</div>
}

export default Digitalclock;
