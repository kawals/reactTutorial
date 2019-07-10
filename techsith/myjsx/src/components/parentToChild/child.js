import React from 'react';

const Child = (props) => {
  return(
    <div>
      <br/>
      <button onClick={props.doWhatEver}>{props.title}, {props.xyz}</button>
    </div>
  );
}

export default Child;
