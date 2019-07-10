import React from 'react';
import Child from './child';

const Parent = (props) => {
  return (
    <div>
    /* Passing all the properties from Grand parent to Child using spreard operator */
      <Child {...props} xyz='xyz'/>
      <Child doWhatEver={props.changeWorld} title={props.title}/>
      <Child doWhatEver={props.KeepWorldSame}  title={props.title}/>
    </div>
  );
}

export default Parent;
