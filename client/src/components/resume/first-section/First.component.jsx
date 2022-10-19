import React from "react";
import "./First.style.scss";

const First = () => {
  return (
    <ul className="resume-education">
      <li className="resume-title">
        <h1>EDUCATION</h1>
      </li>
      <li className="resume-education-items1">
        <div className="resume-education-item-left">
          <p className="resume-education-item-left-text1">Certificate Degree</p>
          <p className="resume-education-item-left-text2">Zero to Mastery</p>
          <p className="resume-education-item-left-text3">
            online university complete node.js developer in 2022 certificate
          </p>
        </div>
        <div className="resume-education-item-right">
          <p className="resume-education-item-right-text1">2022</p>
        </div>
      </li>
      <li className="resume-education-items2">
        <div className="resume-education-item-right">
          <p className="resume-education-item-right-text1">
            Certificate Degree
          </p>
          <p className="resume-education-item-right-text2">MongoDb</p>
          <p className="resume-education-item-right-text3">
            online university complete node.js developer in 2022 certificate
          </p>
        </div>
        <div className="resume-education-item-left">
          <p className="resume-education-item-left-text1">2022</p>
        </div>
      </li>
      <li className="resume-education-items1">
        <div className="resume-education-item-left">
          <p className="resume-education-item-left-text1">Bachelor Degree</p>
          <p className="resume-education-item-left-text2">
            Tehran Azad University
          </p>
          <p className="resume-education-item-left-text3">
            Graduated in civil engineering at this university for 4 years.
          </p>
        </div>
        <div className="resume-education-item-right">
          <p className="resume-education-item-right-text1">2014 - 2018</p>
        </div>
      </li>
      <li className="resume-title">
        <h1>EXPERIENCE</h1>
      </li>
      <li className="resume-education-items2">
        <div className="resume-education-item-right">
          <p className="resume-education-item-right-text1">backend developer</p>
          <p className="resume-education-item-right-text2">@pong-game</p>
          <p className="resume-education-item-right-text3">
            I built a full-stack project (focus on backend) where 2 users can
            play Pong game each other with socket.io. I was able to create
            socket.io server on node js and client side which allows users to
            play each other in rooms. and run express js side by side too. The
            main technologies that I've used are socket.io , node js ,
            express.js .
          </p>
        </div>
        <div className="resume-education-item-left">
          <p className="resume-education-item-left-text1">2022</p>
        </div>
      </li>
      <li className="resume-education-items1">
        <div className="resume-education-item-left">
          <p className="resume-education-item-left-text1">node.js developer</p>
          <p className="resume-education-item-left-text2">
            @nasa-project-practice
          </p>
          <p className="resume-education-item-left-text3">
            I built a full-stack project where users are able to select their
            Destination Exoplanet , Rocket type , Mission Name and Launch Date
            then launch their mission . I was able to create Rocket types with
            parse CSV file in node.js and save it in database before server is
            running . upcoming tab in this project is for check launches and
            delete them . then you can check delete launches in history tab with
            red lable . this project has sound effect too and was able to use
            PM2 for handle requests well. the main technologies that I've used
            are React , Node.js and MongoDB .nasa practice project : . I built a
            full-stack project where users are able to select their Destination
            Exoplanet , Rocket type , Mission Name and Launch Date then launch
            their mission . . I was able to create Rocket types with parse CSV
            file in node.js and save it in database before server is running .
            upcoming tab in this project is for check launches and delete them .
            then you can check delete launches in history tab with red lable .
            this project has sound effect too and was able to use PM2 for handle
            requests well. . the main technologies that I've used are React ,
            Node.js and MongoDB .
          </p>
        </div>
        <div className="resume-education-item-right">
          <p className="resume-education-item-right-text1">2022</p>
        </div>
      </li>
      <li className="resume-education-items2">
        <div className="resume-education-item-right">
          <p className="resume-education-item-right-text1">
            backend node.js developer
          </p>
          <p className="resume-education-item-right-text2">@Sahar company</p>
          <p className="resume-education-item-right-text3">
            We are a company that building web sites for customers in IRAN I
            have worked 2 years there as backend developer . The main
            technologies that I've used are node.js , graphQL , MongoDB , PM2 ,
            Git and Docker.
          </p>
        </div>
        <div className="resume-education-item-left">
          <p className="resume-education-item-left-text1">2019-2021</p>
        </div>
      </li>
    </ul>
  );
};

export default First;

