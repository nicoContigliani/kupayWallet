const express = require('express');
const router = express.Router();

const card = require('../controllers/cardControllers ');
const client = require('../controllers/clientControllers ');
const product = require('../controllers/productControllers');
const transaction = require('../controllers/transactionControllers');
const wallet = require('../controllers/walletControllers');


router.get('/card', card.get);

router.get('/client', client.get);
router.get('/client/:id', client.getId);
router.delete('/client/:id', client.deletes);



router.get('/product', product.get);

router.get('/transaction', transaction.get);

router.get('/wallet', wallet.get);







module.exports = router;
