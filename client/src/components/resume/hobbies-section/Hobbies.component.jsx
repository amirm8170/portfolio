import React from "react";
import "./Hobbies.style.scss";

const Second = () => {
  return (
    <div className="resume-second-container">
      <h1 className="resume-second-title">My Hobbies</h1>
      <div className="resume-hobbies-container">
        <div className="resume-hobbies">
          <div className="icon-container">
            <ion-icon name="game-controller"></ion-icon>
          </div>
          <p>Gaming</p>
        </div>
        <div className="resume-hobbies">
          <div className="icon-container">
            <ion-icon name="book"></ion-icon>
          </div>
          <p>Reading</p>
        </div>
        <div className="resume-hobbies">
          <div className="icon-container">
            <ion-icon name="chatbubble-ellipses"></ion-icon>
          </div>
          <p>Chat</p>
        </div>
        <div className="resume-hobbies">
          <div className="icon-container">
            <ion-icon name="musical-notes"></ion-icon>
          </div>
          <p>Music</p>
        </div>
        <div className="resume-hobbies">
          <div className="icon-container">
            <ion-icon name="beer"></ion-icon>
          </div>
          <p>Drinking</p>
        </div>
        <div className="resume-hobbies">
          <div className="icon-container">
            <ion-icon name="football"></ion-icon>
          </div>
          <p>Football</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
