const mongoose = require('mongoose');

const supermarketSchema = new mongoose.Schema({
    supermarketId:String,
    supermarketName:String,
    supermarketContactInfo:String,
    supermarketReceiveDateTime:String,
    supermarketQantity:String,
    supermarketPrice:String,
    promotions:String,
    labels:String,
    qrCode:String,
    distributionId:String,


});

const Supermarket= mongoose.model('Supermarket', supermarketSchema);

module.exports = Supermarket;