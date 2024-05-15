import React from 'react';
import { FixedSizeList } from 'react-window';

const MyListComponent = ({ data }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <p>{data[index]}</p>
    </div>
  );

  return (
    <FixedSizeList height={400} width={300} itemSize={50} itemCount={data.length}>
      {Row}
    </FixedSizeList>
  );
};

export default MyListComponent;
