module.exports = {
  //create product function
  create: (rep, res) => {
    req.app.db
      .create_product()
      .then(() => {
        res.status(200).send("Created");
      })
      .catch(() => {
        res.status(500).send("Failed to create");
      });
  },
  //read product function
  getOne: (req, res) => {
    req.app.db
      .read_product()
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => {
        res.status(500).send("cant get product");
        console.log("getOne" + error);
      });
  },
  //read all products
  getAll: (req, res) => {
    req.app.db
      .read_products()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(error => {
        res.status(500).send("cant get product");
        console.log("getAll" + error);
      });
  },
  //update product function
  update: (req, res) => {
    req.app.db
      .update_product()
      .then(() => {
        res.status(200).send("updated");
      })
      .catch(() => {
        res.status(500).send("Failed to update");
      });
  },
  //delete product function
  delete: (req, res) => {
    req.app.db
      .delete_product()
      .then(() => {
        res.status(200).send("deleted");
      })
      .catch(() => {
        res.status(500).send("failed to delete");
      });
  }
};
