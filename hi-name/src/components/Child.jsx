import React from 'react';

const Child = ({ name}) => {
  const uppercase = name.toUpperCase()
  return (
    <div>
      hi {uppercase}
    </div>
  );
}

export default Child;
