// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = ({ count, incrementCount }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
};

export default ChildComponent;
