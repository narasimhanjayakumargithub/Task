import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ComponentThatMightFail from './ComponentThatMightFail';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <ComponentThatMightFail />
      </ErrorBoundary>
    </div>
  );
};

export default App;
