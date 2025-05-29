import React, { useContext } from 'react';
import images from "../data/data.json";
import { MouseContext } from "../context/mouseContext";

const Image = ({ name }) => {
  const { hover, normal } = useContext(MouseContext);

  if (!images[name]) {
    return <div>Image not found: {name}</div>;
  }

  const lowRes = images[name].lowRes;
  const highRes = images[name].highRes;

  return (
    <div
      style={{
        backgroundImage: `url(${lowRes})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
      onMouseEnter={hover}
      onMouseLeave={normal}
    >
      <img
        src={highRes}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Image;
