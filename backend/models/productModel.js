const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product:{
        name:String,
        price:Number,
    },
    picture: Buffer,
},{
    timestamps: true
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;