const path = require("path");
const express = require("express");
const productsController = require('../controllers/products')
const router = express.Router();


router.get("/", productsController.getProducts
  //res.send("<p>First One</p>");
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //res.sendFile(path.join(rootDir, "views", "shop.html"));

)

module.exports = router;
