const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");
const UserCart = require("../models/UserCart");
const { check, validationResult } = require("express-validator");

// get all Products in cart
router.get("/:id", async (req, res) => {
  try {
    const userCart = await UserCart.findOne({ user_id: req.params.id });
    res.json({ usercart: userCart });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get number of items in cart
router.get("/count/:id", async (req, res) => {
  try {
    const userCart = await UserCart.findOne({ user_id: req.params.id });
    res.json({ count: userCart.Products.length });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// add product to array with  user_id
router.post(
  "/addtocart",
  [
    check("user_id", "user_id is required").not().isEmpty(),
    check("Product_name", "Product_name is required").not().isEmpty(),
    check("Company_name", "Company_name is required").not().isEmpty(),
    check("Product_no", "Price is required").not().isEmpty(),
    check("Qty", "Quantity is required").not().isEmpty(),
    check("Feature", "Feature is required").not().isEmpty(),
    check("Price", "Price is required").not().isEmpty(),
    check("Product_cat", "Product_cat is required").not().isEmpty(),
    check("Product_sub_cat", "Product_sub_cat is required").not().isEmpty(),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log('hello');
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      user_id,
      Product_name,
      Company_name,
      Product_no,
      Qty,
      Feature,
      Price,
      Product_cat,
      Product_sub_cat,
    } = req.body;

    try {
      const usecart = await UserCart.findOne({ user_id: user_id });
      console.log(usecart);
      if (usecart) {
        // update
        // check if product already exists by Product_no
        const productIndex = usecart.Products.findIndex(
          (product) => product.Product_no === Product_no
        );

        if (productIndex !== -1) {
          // product exists
          usecart.Products[productIndex].Qty += 1;
        }
         else {
          // product does not exist
          usecart.Products.push({
            Product_name,
            Company_name,
            Product_no,
            Qty,
            Feature,
            Price,
            Product_cat,
            Product_sub_cat,
          });
        }
        await usecart.save();
        return res.send(true);
      }
      // create
      userCart = new UserCart({
        user_id,
        Products: [
          {
            Product_name,
            Company_name,
            Product_no,
            Qty,
            Feature,
            Price,
            Product_cat,
            Product_sub_cat,
          },
        ],
      });
      await userCart.save();
      return res.send(true);
    } catch (err) {
      console.log('hello');
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
