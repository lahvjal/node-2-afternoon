const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config();

//controllers
const product_controller = require("./controllers/products_controller");

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

//products table end-points
app.get("/api/products", product_controller.getAll);
app.get("/api/products/:id", product_controller.getOne);
app.put("/api/products/:id", product_controller.update);
app.post("/api/products", product_controller.create);
app.delete("/api/products/:id", product_controller.delete);

//get server listening on a port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
