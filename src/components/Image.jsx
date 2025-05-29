import React, { useContext } from "react";
import images from "../data/data.json";
import { MouseContext } from "../context/mouseContext";

const Image = ({ name, gridColumn,margin}) => {
  const { hover, normal } = useContext(MouseContext);

  if (!images[name]) {
    return <div>Image not found: {name}</div>;
  }

  const lowRes = images[name].lowRes;
  const highRes = images[name].highRes;

  return (
    <div
      style={{
        gridColumn: gridColumn,
      }}
      onMouseEnter={hover}
      onMouseLeave={normal}
    >
      <div
        style={{
          marginTop : margin,
          backgroundImage: `url(${lowRes})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
          
        }}
      >
        <img
          src={highRes}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
            
          }}
        />
      </div>
    </div>
  );
};

export default Image;
