const app = require("./app");
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const PORT = 4000 || process.env.PORT;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, (err, res) => {
  if (res) {
    server.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  }else{
    console.log(err);
  }
});
