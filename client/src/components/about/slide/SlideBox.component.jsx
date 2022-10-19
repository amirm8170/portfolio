import React from "react";
import "./SlideBox.style.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const SlideBox = () => {
  return (
    <div className="about-forth-sections">
      <p className="about-forth-section-title">Testimonials</p>
      <Slide>
        <div className="each-slide-effect">
          <div>
            <p>Slide 1</p>
            <p>Slide 1</p>
            <p>Slide 1</p>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
          </div>
        </div>
        <div className="each-slide-effect">
          <div>
            <p>Slide 3</p>
            <p>Slide 3</p>
            <p>Slide 3</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideBox;
