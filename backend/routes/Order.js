// create order route from backend\models\Order.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");
const { check, validationResult } = require("express-validator");
// const auth = require("../middleware/auth");

router.get("/order", async (req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(404).json({ success: false }));
});

router.post(
  "/addorder",
  [
    check("User_id", "User ID is required").not().isEmpty(),
    check("Product_id", "Product ID is required").not().isEmpty(),
    check("date", "Date is required").not().isEmpty(),
    check("Paymentstatus", "Payment Status is required").not().isEmpty(),
    check("Orders.Order_no", "Order Number is required").not().isEmpty(),
    check("Orders.Qty", "Quantity is required").not().isEmpty(),
    check("Orders.Price", "Price is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      User_id,
      Product_id,
      date,
      Paymentstatus,
      Orders: { Order_no, Qty, Discount, Price },
    } = req.body;
    try {
      const newOrder = new Order({
        User_id,
        Product_id,
        date,
        Paymentstatus,
        Orders: { Order_no, Qty, Discount, Price },
      });
      const order = await newOrder.save();
      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
