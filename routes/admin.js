const path = require("path");
const express = require("express");
//const rootDir = require("../util/path");
const productController = require('../controllers/products')

const router = express.Router();


router.get("/add-product", productController.getAddProduct
  //   res.send(
  //     '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button title="submit">send</button></form>'
  //   );
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  
);

router.post("/add-product", productController.postAddProduct 
  //console.log(JSON.stringify(req.body));
)  

module.exports = router;

