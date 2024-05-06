import React from 'react';

const withLoading = (WrappedComponent) => {
  return class WithLoading extends React.Component {
    render() {
      const { isLoading, ...rest } = this.props;
      
      if (isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...rest} />;
    }
  };
};

export default withLoading;