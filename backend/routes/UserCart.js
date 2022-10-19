const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");
const UserCart = require("../models/UserCart");
const { check, validationResult } = require("express-validator");

// add to cart api

router.post(
  "/addtocart",
  [
    check("product_id", "Product ID is required").not().isEmpty(),
    check("qty", "Quantity is required").not().isEmpty(),
    check("price", "Price is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { product_id, qty, price } = req.body;
    try {
      const newProduct = new UserCart({
        product_id,
        qty,
        price,
      });
      const product = await newProduct.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//all cart items whose user id is 1
router.get("/getallcartitems", async (req, res) => {
  try {
    const products = await UserCart.find({ user_id: 1 });
    res.json(products);
    console.log(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
