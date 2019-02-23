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
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log(app);
  })
  .catch(error => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
