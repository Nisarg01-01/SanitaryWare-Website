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
        product_name: {
            type: String,
            required: [true, 'Product Name is required']
        },
        company_name: {
            type: String,
            required: [true, 'Company Name is required']
        },
        product_no: {
            type: Number,
            required: [true, 'Product Number is required']
        },
        qty: {
            type: Number,
            required: [true, 'Quantity is required']
        },
        feature: {
            type: String,
            required: [true, 'Feature is required']
        }, 
        price: {
            type: Number,
            required: [true, 'Price is required']
        },
        
        }],
        item_sold: {
            type: Number,
            default: 0
        }
    
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;