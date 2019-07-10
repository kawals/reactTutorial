import React from 'react';

const Listing = (props) => {

  return (
    <div>
      <li>Name: {props.children}, Age: {props.age}</li>
      <button onClick="props.delEvent">Delete</button>
    </div>
  );
}

export default Listing;
