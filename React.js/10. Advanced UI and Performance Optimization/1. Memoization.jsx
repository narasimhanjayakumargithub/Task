import React, { useMemo, useCallback } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Expensive data processing logic
    return processData(data);
  }, [data]);

  const handleClick = useCallback(() => {
    // Callback function logic
    doSomething();
  }, []);

  return (
    <div>
      <p>Processed Data: {processedData}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
