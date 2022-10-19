import React from "react";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-row1">
        <p className="footer-name">Amir Mabood</p>
        <div className="footer-container-icons">
          <a href="https://github.com/amirm8170" target='_blank' rel="noreferrer" className="icon-container-footer">
            <ion-icon className='footer-icon' name="logo-github"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/amir-mabood/" target='_blank' rel="noreferrer" className="icon-container-footer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="tel:+905546405389" className="icon-container-footer">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>
      <a href="https://iamfarzin.info/" className="footer-container-row2" target="_blank" rel="noreferrer">by Farzin Mohamadi © 2021</a>
    </div>
  );
};

export default Footer;
