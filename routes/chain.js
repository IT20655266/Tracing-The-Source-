const {createHarvest}= require('../controllers/harvest');
const {createCollection} = require('../controllers/collection');
const { createDistribution } = require('../controllers/distributors');
const { recieveDelivery } = require('../controllers/supermarket');
const { getDetails } = require('../controllers/consumer');


const router = require('express').Router();


router.post('/farmer/add-harvest', createHarvest);
router.post('/clerks/create-collection',createCollection)
router.post('/distributors/create-delivery',createDistribution);
router.post('/supermarkets/recieve-delivery',recieveDelivery);


module.exports = router;