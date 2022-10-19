//create user cart schema & model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserCartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  Products: [
    {
      product_no: {
        type: Number,
        required: [true, "Product Number is required"],
      },
      qty: {
        type: Number,
        required: [true, "Quantity is required"],
      },
      price: {
        type: Number,
        required: [true, "Price is required"],
      },
    },
  ],
  total_price: {
    type: Number,
    required: [true, "Total Price is required"],
  },
});

const UserCart = mongoose.model("UserCart", UserCartSchema);
