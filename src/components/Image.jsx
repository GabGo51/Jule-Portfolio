import React, { useContext, useState, useEffect, useRef } from "react";
import images from "../data/data.json";
import { MouseContext } from "../context/mouseContext";
import { useLanguage } from "../context/languageContext";

const Image = ({ name, gridColumn, margin }) => {
  const { hover, normal } = useContext(MouseContext);
  const [isHovered, setIsHovered] = useState(false);
  const { lang, setLang } = useLanguage();
  
  if (!images[name]) {
    return <div>Image not found: {name}</div>;
  }

  const lowRes = images[name].lowRes;
  const highRes = images[name].highRes;

  const titleKey = lang === "fr" ? "titleFr" : "titleEn";
  const typeKey = lang === "fr" ? "typeFr" : "typeEn";
  const contextKey = lang === "fr" ? "contextFr" : "contextEn";

  return (
    <div style={{ gridColumn: gridColumn }}>
      <div
        style={{
          marginTop: margin,
          backgroundImage: `url(${lowRes})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
        onMouseEnter={() => {
          hover();
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          normal();
          setIsHovered(false);
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
            transition: isHovered ? "none" : "transform 0.3s ease",
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
        <p className="title">{images[name][titleKey]}</p>
        <p className="type">{images[name][typeKey]}</p>
        <p className="context">{images[name][contextKey]}</p>
      </div>
    </div>
  );
};

export default Image;
