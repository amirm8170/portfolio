import React, { useContext } from "react";
import Navigation from "../navigation/Navigation.component";
import Square from "../square/Square.component";
import "./Main.style.scss";
import About from "../about/About.component";
import Resume from "../resume/Resume.component";
import Contact from "../contact/Contact.component";
import { AllContext } from "../../context/AllContext";
import Title from "../title/Title.component";

const Main = () => {
  const { windowSize, showModal } = useContext(AllContext);
  return (
    <div className="main-container">
      <Square />
      {windowSize <= 768 ? <Title /> : null}
      {windowSize <= 768 ? <Navigation /> : null}
      <About />
      <Resume />
      <Contact />
      {!showModal ? <h1 className="name">AMIR MABOOD</h1> : null}
      {!showModal ? 
        <a
          href="https://iamfarzin.info/"
          className="main-footer"
          target="_blank"
          rel="noreferrer"
        >
          by Farzin Mohamadi © 2021
        </a>
       : null}
    </div>
  );
};

export default Main;
