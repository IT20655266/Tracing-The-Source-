const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    collectionId:String,
    clerkName:String,
    clerkContactInfo:String,
    collectionDateTime:String,
    collectionQuantity:String,
    distributeLocation:String,
    distributeTemperature:String,
    distributeStorageConditions:String,
    harvestId:String
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;