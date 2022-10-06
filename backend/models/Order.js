const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Order schema & model
const OrderSchema = new Schema({
    User_id: {
        type:Schema.Types.ObjectId,
        ref:'User',
        required: [true, 'User ID is required']
    },
    Product_id: {
        type:Schema.Types.ObjectId,
        ref:'Product',
        required: [true, 'Product ID is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    Paymentstatus: {
        type: String,
        required: [true, 'Payment Status is required']
    },
    Orders:[{
        Order_no: {
            type: Number,
            required: [true, 'Order Number is required']
        },
        Qty: {
            type: Number,
            required: [true, 'Quantity is required']
        },
        Discount: {
            type: Number,
            default: 0
            
        }, 
        Price: {
            type: Number,
            required: [true, 'Price is required']
        },
        
        }]
    
});

const Order = mongoose.model('Order',OrderSchema);

module.exports = Order;