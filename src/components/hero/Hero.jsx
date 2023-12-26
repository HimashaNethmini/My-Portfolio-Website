import React, { useEffect } from "react";
import "./hero.scss";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    //initialize Typed instance when component mounts
    // eslint-disable-next-line no-undef
    var typed = new Typed(".auto-input", {
      strings: ["Fullstack Developer", "UI / UX Designer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      //clean up Typed instance when component unmounts
      typed.destroy();
    };
  }, []); //empty dependency array ensure the effect runs once

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>HIMASHA NETHMINI</h2>
          <h4>I AM </h4>
          <h1>
            <span class="auto-input"></span>
          </h1>

          <div className="buttons">
            {/* cv link to download */}
            <a href="https://drive.google.com/file/d/1UGYzrZ_1bI2ObxoMBZ71McG1IjK7w0z7/view?usp=sharing">
              <button>Download CV</button>
            </a>

            {/*connected to contact us component */}
            <Link to="contact">
              <button>Contact Me</button>
            </Link>
          </div>

          <img src="scroll.png" alt="svg image" />
        </div>
      </div>

      {/* main image */}
      <div className="imageContainer">
        <img src="myphoto.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
