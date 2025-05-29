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
          
          <Image  gridColumn="2 /4 " name="chimie_01" />
          <Image gridColumn="5 /8 " name="anatolie_01" />
          <Image gridColumn="3 /7 " name="chimie_01" />
          <Image gridColumn="8 /12 " name="anatolie_01" />
          <Image gridColumn="2 /4 " name="chimie_01" />
          <Image gridColumn="5 /8 " name="anatolie_01" />
          
          
          
        </section>
        
        
      </main>
    </>
  );
}

export default App;
