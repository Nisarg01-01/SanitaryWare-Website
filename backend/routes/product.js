const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { check, validationResult } = require("express-validator");
// const auth = require("../middleware/auth");

// @route GET api/product
// @desc Get all products
// @access Public
router.get("/getallproducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    console.log(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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
    console.log(req.body);
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
      Product.findOne({product_no }).then((product) => {
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
      console.log(req.body);
      res.json({ message: req.body });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// get product which has company name as "Jaquar"
router.get("/getproductbycompanyname", async (req, res) => {
  try {
    const products = await Product.find({ company_name: "Jaquar" });
    res.json(products);
    console.log(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
