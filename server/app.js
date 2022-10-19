const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const contactRouter = require("./routers/contact.route")

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use("/contact" , contactRouter)

app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
