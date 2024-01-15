const { hash } = require("./utils")

exports.actions = {
    createHarvest:'createHarvest',
    createCollection:'createCollection',
    createDistribution:'createDistribution',
    recieveDelivery:'recieveDelivery',
    getDetails:'getDetails'
}


exports.namespace = {
    potato: hash('potato').substring(0,2)
}

exports.family = {
    name: 'potato-chain',
    namespace: hash('potato-chain').substring(0,6),
    version: '1.0'
}