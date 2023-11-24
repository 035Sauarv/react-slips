import React from 'react';
import Child from './Child';

const Parent = () => {
    const name = "saurav"
  return (
    <div>
      <Child name={name}/>
    </div>
  );
}

export default Parent;
