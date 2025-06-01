import React, { useContext } from "react";
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import on from "/img/on.png";
import off from "/img/off.png";
import "./Cursor.css"; // Import the CSS file

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  
  

  return (
    <section className="cursor-container">
      <div
        className={`cursor-dot ${cursorType === "hover" ? cursorType : ""}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        <img
          alt="cursor-on"
          className={cursorType === "hover" ? "move" : ""}
          src={on}
        />
        <img
          alt="cursor-off"
          className={cursorType !== "hover" ? "moveoff" : ""}
          src={off}
        />
      </div>
    </section>
  );
};

export default Cursor;