import React, { useState } from 'react';
import withLoading from './withLoading';

const MyComponent = ({ data }) => {
  return (
    <div>
      <h2>Data: {data}</h2>
    </div>
  );
};

const MyComponentWithLoading = withLoading(MyComponent);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Simulate asynchronous action
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <MyComponentWithLoading isLoading={isLoading} data="Hello World!" />
    </div>
  );
};

export default App;