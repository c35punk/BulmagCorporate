import React from "react";
import { Parallax } from "react-parallax";

const ParallaxPage = () => (
  <div>
    {/* <Parallax
      blur={10}
      bgImage={require("../../assets/img/pics-vte5/IMG_0864.jpg")}
      bgImageAlt="the cat"
      strength={200}
    >
      Put some text content here or even an empty div with fixed dimensions to
      have a height for the parallax.
      <div style={{ height: "200px" }} />
    </Parallax> */}
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require("../../assets/img/pics-vte5/business card.jpg")}
      bgImageAlt="the dog"
      strength={450}
    >
      <div style={{ height: "450px" }} />
    </Parallax>
    {/* <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
      </Background>
    </Parallax> */}
  </div>
);
export default ParallaxPage;
