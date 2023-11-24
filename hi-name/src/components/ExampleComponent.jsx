import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  // State for demonstrating the update effect
  const [count, setCount] = useState(0);

  // Mount effect
  useEffect(() => {
    console.log('Inside mount');
    
    // Cleanup function for unmount effect
    return () => {
      console.log('Inside unmount');
    };
  }, []); // Empty dependency array means it will only run once on mount

  // Update effect
  useEffect(() => {
    console.log('Inside update');
    
    // Cleanup function for update effect
    return () => {
      console.log('Inside unmount (from update)');
    };
  }, [count]); // Dependency array with 'count' means it will run on mount and every time 'count' changes

  return (
    <div>
      <h1>Example of mounting</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
