// GrandChildComponent.js
import React from 'react';

const GrandChildComponent = ({ count, incrementCount }) => {
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default GrandChildComponent;
