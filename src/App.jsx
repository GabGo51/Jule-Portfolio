import React, { useState, useContext, useEffect } from "react";
import "./App.css";
// import Cursor from "./Cursor";
import { MouseContext } from "./context/mouseContext";
import Layer from "./components/Layer";
import Image from "./components/Image";
import Video from "./components/Video";
import { ReactLenis, useLenis } from "lenis/react";
import { useLanguage } from "./context/languageContext";
import Intro from "./data/intro.json";

function App() {
  const { hover, normal } = useContext(MouseContext);
  const lenis = useLenis();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = (e) => {
      console.log("scroll event", e);
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <>
      <ReactLenis root />
      {/* <Cursor /> */}
      <main>
        <p className="bold">{Intro.intro[lang]}</p>
        <div className="nav">
          <p className="bold">jjjules.n@gmail.com :&#41;</p>
          <div>
            <button className="bold" onClick={() => setLang("fr")}>FR</button>
            <button className="bold" onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
        <section>
          <Layer>
            <Image gridColumn="1 /6 " name="errance_01"  />
            <Image gridColumn="7 /13 " name="nuitblue_02" margin="50%" />
          </Layer>
          <Layer>
            <Video gridColumn="2 /11 " name="nuitblue_03" margin="" />
            <Image gridColumn="3 /7 " name="nuitblue_01" margin="10%" /> 
          </Layer>
          <Layer>
            <Video gridColumn="4 /13 " name="mapp_02" margin="10%" /> 
            <Video gridColumn="3 /6" name="mapp_03" margin="30%" /> 
            <Image gridColumn="8 /13 " name="wales_01" margin="80%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /6 " name="anatolie_03" margin="-20%" />
            <Image gridColumn="7 /13 " name="anatolie_02" margin="60%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /6 " name="anatolie_01" margin="-30%" />
            <Image gridColumn="4 /12 " name="anatolie_04" margin="10%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /8 " name="triplex_01" margin="80%" />
            <Image gridColumn="10 /13 " name="triplex_03" margin="20%" />
          </Layer>
          <Layer>
            <Image gridColumn="8 /12 " name="triplex_04" margin="-80%" />
          </Layer>
          <Layer>
            <Video gridColumn="1 /7 " name="Ada" margin="" />
          </Layer>
          <Layer>
            <Video gridColumn="2 /12 " name="foil_01" margin="" />
          </Layer>
          <Layer>
            <Video gridColumn="3 /12 " name="AllianceNav" margin="" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /5 " name="farley_01" margin="20%" />
            <Image gridColumn="6 /13 " name="wales_02" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /10 " name="inflated_01" margin="0%" />
          </Layer>
          <Layer>
            <Video gridColumn="6 /13 " name="anim_02" margin="" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /5 " name="pdfe_02" margin="0%" />
            <Video gridColumn="7 /12 " name="pdfe_05" margin="40%" />
          </Layer>
          <Layer>
            <Video gridColumn="2 /8 " name="pdfe_04" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /4 " name="pdfe_03" margin="100%" />
            <Image gridColumn="6 /13 " name="pdfe_01" margin="0%" />
          </Layer>
          <Layer>
            <Video gridColumn="2 /5 " name="anim_03" margin="0%" />
          </Layer>
          <Layer>
            <Video gridColumn="1 /7 " name="mtnslab_01" margin="30%" />
            <Video gridColumn="8 /13 " name="mtnslab_04" margin="-20%" />
          </Layer>
          <Layer>
            <Video gridColumn="6 /12 " name="mtnslab_03" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /7 " name="chimie_05" margin="0%" />
            <Image gridColumn="10 /13 " name="img_01" margin="30%" />
          </Layer>
          <Layer>
            <Image gridColumn="3 /12 " name="chimie_01" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="6 /11 " name="chimie_04" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /4 " name="mamie_02" margin="-100%" />
          </Layer>
          <Layer>
            <Video gridColumn="3 /13 " name="SBP_01" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /10 " name="etape_01" margin="0%" />
          </Layer>
          <Layer>
            <Video gridColumn="4 /12 " name="etape_01" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /6 " name="etape_03" margin="0%" />
            <Video gridColumn="8 /13 " name="mayman_03" margin="30%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /11 " name="mayman_02" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="6 /12 " name="mayman_01" margin="0%" />
          </Layer>
        </section>

        {/* Return to Top Button */}
        <button
          className="bold return-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Return to top of page"
          style={{ cursor: "pointer", background: "none", border: "none", padding: 0, marginTop: '10rem' }}
        >
          RETOUR
        </button>
      </main>
    </>
  );
}

export default App;
