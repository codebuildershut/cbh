const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();
require("./bin/connection.js");

app.use(bodyParser.json());
// app.use("/", routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
