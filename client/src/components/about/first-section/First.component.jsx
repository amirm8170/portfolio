import React from "react";
import Amir from "../../../image/Amir.jpeg";
import "./First.style.scss";
import CV from "../../../file/AMIR MABOOD-CV.pdf";

const First = () => {
  return (
    <div className="about-first-sections">
      <img className="about-first-section-image" src={Amir} alt="amir mabood" />
      <div className="about-first-section-text">
        <div className="about-first-section-text-info">
          <p>
            Node.js web developer and network engineer seeking back-end
            developer role.
          </p>
          <p>
            Over 2 years of experience building back-end components and
            connecting applications to web-based services.
          </p>
          <p>
            High competencies in back-end JavaScript components, database
            systems and DevOps processes.
          </p>
        </div>
        <div className="about-first-section-text-info2">
          <div className="about-first-section-text-info2-each-section">
            <p className="about-info-title">
              Name
              <br />
              <span>Amir Mabood</span>
            </p>
            <p className="about-info-title">
              Age
              <br />
              <span>25 Years</span>
            </p>
          </div>
          <div className="about-first-section-text-info2-each-section">
            <p className="about-info-title">
              Role
              <br />
              <span>Node.js Developer</span>
            </p>
            <p className="about-info-title">
              Hometown
              <br />
              <span>Antalya</span>
            </p>
          </div>
        </div>
        <div className="about-first-section-buttons">
          <a href="mailto:amir_mabood@yahoo.com" className="btn">
            Hire me
          </a>
          <a href={CV} className="btn" download="AMIR MABOOD-CV.pdf">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default First;
