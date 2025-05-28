import { useState, useContext } from "react";
import "./App.css";
import Cursor from "./Cursor";
import { MouseContext } from "./context/mouseContext";
import Layer from "./components/Layer";
import Image from "./components/Image";
import Video from "./components/Video";
import images from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  const { hover, normal } = useContext(MouseContext);
  return (
    <>
      <Cursor />
      <main>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        
        <img onMouseEnter={hover} onMouseLeave={normal} src={images[2].lowRes}/>
        <img onMouseEnter={hover} onMouseLeave={normal} src={images[3].lowRes}/>
      </main>
    </>
  );
}

export default App;
