const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create manufacturer schema & model
const ManufacturerSchema = new Schema({
    Manufacturers:[{      
        Product_id: {
            type:Schema.Types.ObjectId,
            ref:'Product',
            required: [true, 'Product ID is required']
        },
        Qty: {
            type: Number,
            required: [true, 'Quantity is required']
        },
        Price: {
            type: Number,
            required: [true, 'Price is required']
        }
        
        }]
    
});

const User = mongoose.model('Manufacturer',ManufacturerSchema);

module.exports = Manufacturer;