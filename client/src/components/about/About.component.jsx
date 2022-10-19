import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AllContext } from "../../context/AllContext";
import Footer from "../footer/Footer.component";
import "../same-css/Items.style.scss";
import First from "./first-section/First.component";
import Second from "./second-section/Second.component";
import Third from "./third-section/Third.component";
import Video from "./video/Video.component";


const About = () => {
  const { showModal, setShowModal } = useContext(AllContext);
  const [showAbout, setShowAbout] = useState(false);
  useEffect(() => {
    if (showModal === "about") {
      setTimeout(() => setShowAbout(true), 1800);
    }
    setShowAbout(false);
  }, [showModal]);

  return (
    <div className="items-container"
      style={
        showAbout && showModal === "about"
          ? { height: "100%" }
          : { height: "0%" }
      }
    >
      {showAbout ? (
        <div className="items-sections">
          <div className="btn-close-container">
            <AiOutlineCloseCircle
              onClick={() => setShowModal(false)}
              className="btn-close"
            />
          </div>
          <h1 className="sections-title">Basic Info About Me</h1>
          <First/>
          <Second/>
          <Third/>
          <Video/>
          <Footer/>
        </div>
      ) : null}
    </div>
  );
};
export default About;
