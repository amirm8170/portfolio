const { httpPostContact } = require("../controllers/contact.controller");
const express = require("express");
const contactRouter = express.Router();

contactRouter.post("/", httpPostContact);

module.exports = contactRouter;
