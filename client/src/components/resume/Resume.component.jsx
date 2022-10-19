import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../../context/AllContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../same-css/Items.style.scss";
import First from "./first-section/First.component";
import Hobbies from "./hobbies-section/Hobbies.component";
import Skills from "./skills-section/Skills.component";
import Footer from '../footer/Footer.component'

const Resume = () => {
  const { showModal, setShowModal } = useContext(AllContext)
  const [showResume, setShowResume] = useState(false);
  useEffect(() => {
    if (showModal==='resume') {
      setTimeout(() => setShowResume(true), 1800);
    }
    setShowResume(false);
  }, [showModal]);

  return (
    <div
      className="items-container"
      style={showResume && showModal==='resume' ? { height: "100%" } : { height: "0%" }}
    >
      {showResume ? (
        <>
        <div className="items-sections">
          <div className="btn-close-container">
            <AiOutlineCloseCircle
              onClick={() => setShowModal(false)}
              className="btn-close"
            />
          </div>
          <h1 className="sections-title">My Resume</h1>
          <First/>
          <Hobbies/>
          <Skills/>
          <Footer/>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Resume;
