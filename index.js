const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} fool!`);
});
