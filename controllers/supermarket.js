const Supermarket = require("../schemas/supermarket");
const {sendTransaction} = require("../services/transaction");
const { actions } = require("../constants");

exports.recieveDelivery = ( async (req, res) => {
    try {
        // Extract data from the request body
        const { supermarketId,supermarketName,supermarketContactInfo,supermarketReceiveDateTime,supermarketQantity,supermarketPrice,promotions,labels,qrCode,distributionId} = req.body;

        // Create a ReceivePotato object
        const newDelivery= new Supermarket({
            supermarketId,
            supermarketName,
            supermarketContactInfo,
            supermarketReceiveDateTime,
            supermarketQantity,
            supermarketPrice,
            promotions,
            labels,
            qrCode,
            distributionId,
        });

        await newDelivery.save();
        const payload={
            id:supermarketId,
            supermarketName:supermarketName,
            supermarketContactInfo:supermarketContactInfo,
            supermarketReceiveDateTime:supermarketReceiveDateTime,
            supermarketQantity:supermarketQantity,
            supermarketPrice:supermarketPrice,
            promotions:promotions,
            labels:labels,
            qrCode:qrCode,
            distributionId:distributionId,
            owner:req.user.publicKey,
            action: actions.recieveDelivery,
        }
        console.log(payload)
    
    const test = await sendTransaction(payload, req.user.publicKey)
        .then((result) => {
            return({
                result: result,
                message: "Transaction submitted",
                owner:payload.owner
              });

        }).catch((err) => {
            return ('Pending in transaction submission');
        })
    const response = {
        test:test,
        message:'Delivery transaction submitted successfully.'
    }

    res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});