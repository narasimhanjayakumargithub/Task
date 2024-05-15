import React, { Suspense } from 'react';

const LazyLoadedComponent = React.lazy(() => import('./LazyLoadedComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedComponent />
    </Suspense>
  );
};

export default MyComponent;
