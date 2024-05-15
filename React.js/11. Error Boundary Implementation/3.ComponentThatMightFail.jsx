// ComponentThatMightFail.js
import React from 'react';

const ComponentThatMightFail = () => {
  // Simulate an error by accessing a non-existent property
  const user = null;
  return <h2>{user.name}</h2>;
};

export default ComponentThatMightFail;
