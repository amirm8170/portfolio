const Contacts = require("../models/contact.model");
const nodeMailer = require("nodemailer");
const path = require("path");

const httpPostContact = async (req, res) => {
  try {
    const { name, email, phone, website, message } = req.body;
    const validEmail = checkValidateEmails(email);
    if (!validEmail || !name || !phone || !message) {
      return res.status(400).json({ message: "all fields are required" });
    } else {
      const newContact = new Contacts({
        name,
        email,
        phone,
        website,
        message,
      });
      await newContact.save();
      sendingMail(email);
      return res.status(201).json({ message: "ok" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { httpPostContact };

const checkValidateEmails = (email) => {
  if (
    email &&
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const sendingMail = (email) => {
  const transPorter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "amirmabood94040@gmail.com",
      pass: "pwxvumprdlxymbmt",
    },
  });
  let mailOption = {
    from: "amirmabood94040@gmail.com",
    to: email,
    subject: "AMIR Mabood",
    text: `thank you for your email , I will respond you as soon as possible . 
      I'm sending my resume file automatically to your email.
      It doesn't need to reply this message , 
      thank you very much. `,
    attachments: [
      {
        filename: "resume.pdf",
        path: path.join(__dirname, "..", "..", "pdf", "resume.pdf"),
        contentType: "application/pdf",
      },
    ],
  };
  transPorter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`email sent ${info.response}`);
    }
  });
};
