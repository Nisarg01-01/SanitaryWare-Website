const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Product schema & model
const ProductSchema = new Schema({
    Order_id: {
        type:Schema.Types.ObjectId,
        ref:'Order',
        required: [true, 'Order ID is required']
    },
    Manufacturer_id: {
        type:Schema.Types.ObjectId,
        ref:'Manufacturer',
        required: [true, 'Manufacturer ID is required']
    },
    Products:[{
        Product_name: {
            type: String,
            required: [true, 'Product Name is required']
        },
        Company_name: {
            type: String,
            required: [true, 'Company Name is required']
        },
        Product_no: {
            type: Number,
            required: [true, 'Product Number is required']
        },
        Qty: {
            type: Number,
            required: [true, 'Quantity is required']
        },
        Feature: {
            type: String,
            required: [true, 'Feature is required']
        }, 
        Price: {
            type: Number,
            required: [true, 'Price is required']
        },
        
        }],
        Item_sold: {
            type: Number,
            default: 0
        }
    
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;