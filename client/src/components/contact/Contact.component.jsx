import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AllContext } from "../../context/AllContext";
import Footer from "../footer/Footer.component";
import "./Contact.style.scss";
import Form from "./form/Form.component";

const Contact = () => {
  const { showModal, setShowModal } = useContext(AllContext);
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    if (showModal === "contact") {
      setTimeout(() => setShowContact(true), 1800);
    }
    setShowContact(false);
  }, [showModal]);

  return (
    <div
      className="items-container"
      style={showContact && showModal==='contact' ? { height: "100%" } : { height: "0%" }}
    >
      {showContact ? (
        <>
        <div className="items-sections">
          <div className="btn-close-container">
            <AiOutlineCloseCircle
              onClick={() => setShowModal(false)}
              className="btn-close"
            />
          </div>
          <h1 className="sections-title">Contact Me</h1>
          <Form/>
          <Footer/>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Contact;
