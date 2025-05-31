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
          Agrofeenz tycoon
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
          <Layer>
            <Image gridColumn="1 /7 " name="triplex_01"/>
            <Image gridColumn="8 /13 " name="triplex_03" margin="130%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /6 " name="Triplex_02"/>
            
          </Layer>
          <Layer>
            
          </Layer>
          <Layer>
            <Image gridColumn="2 /5 " name="farley_01" margin="20%"/>
            <Image gridColumn="6 /13 " name="wales_02" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /10 " name="inflated_01" margin="0%"/>
          </Layer>
          <Layer>
            <p>VIDEO</p>
          </Layer>
          <Layer>
            <Image gridColumn="2 /5 " name="pdfe_02" margin="0%"/>
          </Layer>
          <Layer>
            <p>VIDEO</p>
            <p>VIDEO</p>
          </Layer>
          <Layer>
            <Image gridColumn="1 /4 " name="pdfe_03" margin="100%"/>
            <Image gridColumn="6 /13 " name="pdfe_01" margin="0%"/>
          </Layer>
          <Layer>
            <p>VIDEO</p>
            <p>VIDEO</p>
            <p>VIDEO</p>
            <p>VIDEO</p> 
          </Layer>
          <Layer>
            <Image gridColumn="1 /7 " name="chimie_05" margin="0%"/>
            <Image gridColumn="10 /13 " name="img_01" margin="30%"/>
          </Layer>
          <Layer>
            <Image gridColumn="3 /12 " name="chimie_01" margin="0%"/> 
          </Layer>
          <Layer>
            <Image gridColumn="1 /4 " name="mamie_01" margin="0%"/>
            <Image gridColumn="6 /11 " name="chimie_04" margin="30%"/>
          </Layer>
          <Layer>
            <p>VIDEO</p>
          </Layer>
          <Layer>
            <Image gridColumn="1 /10 " name="etape_01" margin="0%"/>
          </Layer>
          <Layer>
            <p>VIDEO</p>
          </Layer>
          <Layer>
            <Image gridColumn="1 /6 " name="etape_03" margin="0%"/>
            <p>VIDEO</p>
          </Layer>
          <Layer>
            <Image gridColumn="1 /11 " name="mayman_02" margin="0%"/>
          </Layer>
          <Layer>
            <Image gridColumn="6 /12 " name="mayman_01" margin="0%"/>
          </Layer>

        </section>
      </main>
    </>
  );
}

export default App;
