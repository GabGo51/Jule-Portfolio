import React, { useContext, useState, useEffect, useRef } from "react";
import images from "../data/data.json";
import { MouseContext } from "../context/mouseContext";

const Image = ({ name, gridColumn, margin }) => {
  const { hover, normal } = useContext(MouseContext);
  const [isHovered, setIsHovered] = useState(false);
  const [renderTransform, setRenderTransform] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const currentTransform = useRef({ x: 0, y: 0 });
  const targetTransform = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false); // NEW: Track if mouse has moved

  if (!images[name]) {
    return <div>Image not found: {name}</div>;
  }

  const lowRes = images[name].lowRes;
  const highRes = images[name].highRes;

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    hasMoved.current = true; // mouse has moved, allow updates

    targetTransform.current = {
      x: ((offsetX / rect.width) - 0.5) * 10,
      y: ((offsetY / rect.height) - 0.5) * 10,
    };
  };

  useEffect(() => {
    let frame;

    const smoothFollow = () => {
      if (hasMoved.current) {
        currentTransform.current.x +=
          (targetTransform.current.x - currentTransform.current.x) * 0.025;
        currentTransform.current.y +=
          (targetTransform.current.y - currentTransform.current.y) * 0.025;

        setRenderTransform({ ...currentTransform.current });
      }

      frame = requestAnimationFrame(smoothFollow);
    };

    frame = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ gridColumn: gridColumn }}>
      <div
        ref={containerRef}
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
          hasMoved.current = false; // Reset on enter
        }}
        onMouseLeave={() => {
          normal();
          setIsHovered(false);
          targetTransform.current = { x: 0, y: 0 };
        }}
        onMouseMove={handleMouseMove}
      >
        <img
          src={highRes}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
            transform: `scale(1.05) translate(${renderTransform.x}px, ${renderTransform.y}px)`,
            transition: isHovered ? "none" : "transform 0.3s ease",
            willChange: "transform",
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
        <p className="title">{images[name].titleFr || "Titre ici"}</p>
        <p className="type">{images[name].typeFr || "Titre ici"}</p>
        <p className="shoutout">{images[name].shoutoutFr || "Titre ici"}</p>
        <p className="year">{images[name].year || "Titre ici"}</p>
      </div>
    </div>
  );
};

export default Image;
