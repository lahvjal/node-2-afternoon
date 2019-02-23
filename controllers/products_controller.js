module.exports = {
  //create product function
  create: (rep, res) => {
    let { name, description, price, image_url } = req.body;
    req.app
      .get("db")
      .create_product([name, description, price, image_url])
      .then(() => {
        res.status(200).send("Created");
      })
      .catch(() => {
        res.status(500).send("Failed to create");
      });
  },
  //read product function
  getOne: (req, res) => {
    let { id } = req.params;
    req.app
      .get("db")
      .read_product([id])
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
    req.app
      .get("db")
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
    let { id } = req.params;
    let { desc } = req.query;
    req.app
      .get("db")
      .update_product([desc, id])
      .then(() => {
        res.status(200).send("updated");
      })
      .catch(() => {
        res.status(500).send("Failed to update");
      });
  },
  //delete product function
  delete: (req, res) => {
    let { id } = req.params;
    req.app
      .get("db")
      .delete_product([id])
      .then(() => {
        res.status(200).send("deleted");
      })
      .catch(() => {
        res.status(500).send("failed to delete");
      });
  }
};
