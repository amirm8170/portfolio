import React, { useContext } from "react";
import "./Navigation.style.scss";
import { AllContext } from "../../context/AllContext";

const Navigation = () => {
  const { setShowModal, showModal } = useContext(AllContext);
  return (
    <>
      {!showModal ? (
        <div className="navigation-container">
          <ul className="navigation-items">
            <li
              onClick={() => {
                setShowModal("about");
              }}
              className="navigation-item"
            >
              ABOUT ME
            </li>
            <li
              onClick={() => {
                setShowModal("resume");
              }}
              className="navigation-item"
            >
              RESUME
            </li>
            <li
              onClick={() => {
                setShowModal("contact");
              }}
              className="navigation-item"
            >
              CONTACT
            </li>
            <a className="navigation-item" href="mailto:amir_mabood@yahoo.com">
              Hire me
            </a>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
