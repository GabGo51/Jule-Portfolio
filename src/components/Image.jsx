import React, { useContext, useState, useEffect, useRef } from "react";
import images from "../data/data.json";
import { MouseContext } from "../context/mouseContext";

const Image = ({ name, gridColumn, margin }) => {
  const { hover, normal } = useContext(MouseContext);
  const [isHovered, setIsHovered] = useState(false);
  const [renderTransform, setRenderTransform] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const targetTransform = useRef({ x: 0, y: 0 });

  if (!images[name]) {
    return <div>Image not found: {name}</div>;
  }

  const lowRes = images[name].lowRes;
  const highRes = images[name].highRes;

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // Store the intended transform, don't apply it directly
    targetTransform.current = {
      x: ((offsetX / rect.width) - 0.5) * 20,
      y: ((offsetY / rect.height) - 0.5) * 20,
    };
  };

  useEffect(() => {
    let frame;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const update = () => {
      setRenderTransform((prev) => ({
        x: lerp(prev.x, targetTransform.current.x, 0.1),
        y: lerp(prev.y, targetTransform.current.y, 0.1),
      }));

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  const resetTransform = () => {
    targetTransform.current = { x: 0, y: 0 };
  };

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
        }}
        onMouseLeave={() => {
          normal();
          setIsHovered(false);
          resetTransform();
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
            transform: `translate(${renderTransform.x}px, ${renderTransform.y}px) scale(1.05)`,
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
