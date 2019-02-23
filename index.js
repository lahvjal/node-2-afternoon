const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

//destruct variables from .env
const { PORT, CONNECTION_STRING } = process.env;

//middleware
const app = express();
app.use(bodyParser.json());

//database connection
massive();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} fool!`);
});
