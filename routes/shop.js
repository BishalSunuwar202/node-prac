const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log("shopJs:", adminData.products);
  //res.send("<p>First One</p>");
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //res.sendFile(path.join(rootDir, "views", "shop.html"));

  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: 'Shop' });
});

module.exports = router;
