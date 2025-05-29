import React from 'react';

const Layer = ({ children, marginBottom }) => {
  return (
    <div
      className='layer'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)', // 12-column grid inside the layer
        gap: '20px', // gap between images in the layer
        marginBottom: marginBottom || '40px', // margin between layers, default 40px
      }}
    >
      {children}
    </div>
  );
};

export default Layer;