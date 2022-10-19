import React, { useContext, useState } from "react";
import "./Form.style.scss";
import { AllContext } from "../../../context/AllContext";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
const Form = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user, setUser, regex, errors, setShowModal, initUser } =
    useContext(AllContext);
  const [err, setErr] = useState(errors);
  const { nameRegex, emailRegex, phoneRegex } = regex;
  const { name, email, phone, website, message } = user;
  const { nameErr, emailErr, phoneErr, messageErr } = err;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    switch (name) {
      case "name":
        if (!nameRegex.test(value)) {
          setErr({ ...err, nameErr: "Name is not valid!" });
          setError(true);
        } else {
          setErr({ ...err, nameErr: "" });
          setError(false);
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          setErr({ ...err, emailErr: "Email is not valid!" });
          setError(true);
        } else {
          setErr({ ...err, emailErr: "" });
          setError(false);
        }
        break;
      case "phone":
        if (!phoneRegex.test(value)) {
          setErr({ ...err, phoneErr: "phone is not valid! (example:+905546405389)" });
          setError(true);
        } else {
          setErr({ ...err, phoneErr: "" });
          setError(false);
        }
        break;
      case "message":
        if (value.length < 5) {
          setErr({ ...err, messageErr: "message is too short!" });
          setError(true);
        } else {
          setErr({ ...err, messageErr: "" });
          setError(false);
        }
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post("https://29fa-78-162-42-154.eu.ngrok.io/contact", user)
        .then((res) => {
          if (res.status === 201) {
            setLoading(false);
          }
        });
      setModal("Message Sent. I will contact you soon");
      setUser(initUser);
    } catch (error) {
      setLoading(false);
      setModal(error.message);
    }
  };
  return (
    <div className="form-section">
      <p>
        I'm available for freelancing. If you want something to be built or just
        to
      </p>
      <p>say hi, feel free to shoot me a message.</p>
      <form className="form-container" onSubmit={onSubmitHandler}>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {nameErr ? <p className="form-err">{nameErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {emailErr ? <p className="form-err">{emailErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {phoneErr ? <p className="form-err">{phoneErr}</p> : null}
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(event) => onChangeHandler(event)}
          />
        </div>
        <div className="form-textarea-container">
          <textarea
            className="form-textarea"
            placeholder="Message"
            name="message"
            value={message}
            onChange={(event) => onChangeHandler(event)}
            required
          />
          {messageErr ? <p className="form-err">{messageErr}</p> : null}
        </div>
        <button
          className="btn margin"
          disabled={error || loading ? true : false}
        >
          {loading && <FaSpinner className="spinner" />}
          {loading ? <span>Sending Message</span> : <span>Send Message</span>}
        </button>
      </form>
      <div
        className="send-message"
        style={modal ? { diplay: "block" } : { display: "none" }}
      >
        <div className="form-modal">
          <p>{modal}</p>
          {modal ? (
            <button
              className="btn margin"
              onClick={() =>
                modal === "Message Sent. I will contact you soon" ? setShowModal(false) : setModal(false)
              }
            >
              OK
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
