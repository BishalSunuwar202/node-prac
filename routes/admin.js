const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button title="submit">send</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(JSON.stringify(req.body));
  res.redirect("/");
});

module.exports = router;