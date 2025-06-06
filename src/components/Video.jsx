import React, { useContext, useState } from "react";
import images from "../data/data.json";
import { MouseContext } from "../context/mouseContext";

const Video = ({ name, gridColumn, margin }) => {
  const { hover, normal } = useContext(MouseContext);
  const [isHovered, setIsHovered] = useState(false);

  if (!images[name]) {
    return <div>Image not found: {name}</div>;
  }

  const src = images[name].mp4;
  

  return (
    <div
      style={{
        gridColumn: gridColumn,
      }}
    >
      <div
        style={{
          marginTop: margin,
          
          width: "100%",
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <video
          src={src}
          autoPlay   
          muted      
          loop       
          playsInline 
          
          
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="img-text"
      >
        <p className="title">{images[name].titleFr }</p>
        <p className="type">{images[name].typeFr }</p>
        <p className="context">{images[name].contextFr }</p>
      </div>
    </div>
  );
};

export default Video;
