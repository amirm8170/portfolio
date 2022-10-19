import React from "react";
import './Video.style.scss'
const url = 'https://www.youtube.com/embed/3SNgmpvw5O0'
const Video = () => (
  <div className="video-container">
    <p className="video-title">WHO AM I ?</p>
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={url}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </div>
);



export default Video;