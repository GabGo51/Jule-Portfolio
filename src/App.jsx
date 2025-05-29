import { useState, useContext } from "react";
import "./App.css";
import Cursor from "./Cursor";
import { MouseContext } from "./context/mouseContext";
import Layer from "./components/Layer";
import Image from "./components/Image";
import Video from "./components/Video";


function App() {

  const { hover, normal } = useContext(MouseContext);
  return (
    <>
      <Cursor />
      <main>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <section>
          <Image name="anatolie_01" />
          
        </section>
        
        
      </main>
    </>
  );
}

export default App;
