import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Circule.style.scss'

const Circule = ({value , text}) => {
  return (
    <CircularProgressbar 
      className="skills-slide"
      value={value}
      text={text}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#000000",
        textColor: "#fff",
        pathColor: "#fff",
        trailColor: "transparent",
      })}
    />
  );
};

export default Circule;
