import React from "react";
import "./Skills.style.scss";
import Circule from "./circule/Circule.component";
const Skills = () => {
  return (
    <div className="resume-skills-container">
      <h1 className="resume-skills-title">My Skills</h1>
      <div className="resume-skills-slides">
        <div className="resume-skills-slide">
          <Circule value={"90"} text={"90%"} />
          <p>Node.js</p>
        </div>
        <div className="resume-skills-slide">
          <Circule value={"90"} text={"90%"} />
          <p>MongoDB</p>
        </div>
        <div className="resume-skills-slide">
          <Circule value={"70"} text={"70%"} />
          <p>Docker</p>
        </div>
        <div className="resume-skills-slide">
          <Circule value={"85"} text={"85%"} />
          <p>Git</p>
        </div>
        <div className="resume-skills-slide">
          <Circule value={"90"} text={"90%"} />
          <p>Express.js</p>
        </div>
        <div className="resume-skills-slide">
          <Circule value={"70"} text={"70%"} />
          <p>PostgresSQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
