import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const AboutMe = () => {
  return (
    <div className="w-full ">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} className="bg-blue-800" />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default AboutMe;
