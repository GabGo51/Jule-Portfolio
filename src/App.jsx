import { useState, useContext } from "react";
import "./App.css";
import Cursor from "./Cursor";
import { MouseContext } from "./context/mouseContext";
import Layer from "./components/Layer";
import Image from "./components/Image";
import Video from "./components/Video";
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const { hover, normal } = useContext(MouseContext);
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      <Cursor />
      <main>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <section>
          <Layer>
            <Image gridColumn="1 /6 " name="errance_01"/>
            <Image gridColumn="7 /13 " name="nuitblue_02" margin="50%" />
          </Layer>
          <Layer>
            <p>VIDEO</p>
            
          </Layer>
          <Layer>
            <Image gridColumn="3 /7 " name="nuitblue_01"/>
            <Image gridColumn="8 /13 " name="wales_01" margin="40%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /6 " name="anatolie_03"/>
            <Image gridColumn="7 /13 " name="anatolie_02" margin="50%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /12 " name="anatolie_01"/> 
          </Layer>
          <Layer>
            <Image gridColumn="6 /12 " name="anatolie_04"/> 
          </Layer>

          
        </section>
      </main>
    </>
  );
}

export default App;
