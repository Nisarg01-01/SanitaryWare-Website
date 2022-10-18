const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { check, validationResult } = require("express-validator");
// const auth = require("../middleware/auth");

router.get("/product", async (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(404).json({ success: false }));
});

router.post(
  "/addproduct",
  [
    check("product_name", "Product Name is required").not().isEmpty(),
    check("company_name", "Company Name is required").not().isEmpty(),
    check("product_no", "Product Number is required").not().isEmpty(),
    check("qty", "Quantity is required").not().isEmpty(),
    check("feature", "Feature is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty(),
    check("item_sold", "Item Sold is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      product_name,
      company_name,
      product_no,
      qty,
      feature,
      price,
      item_sold,
    } = req.body;
    try {
      Product.findOne({ product_name }).then((product) => {
        if (product)
          return res.status(400).json({ msg: "Product already exists" });
      });
      const newProduct = new Product({
        product_name,
        company_name,
        product_no,
        qty,
        feature,
        price,
        item_sold,
      });
      const product = await newProduct.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
