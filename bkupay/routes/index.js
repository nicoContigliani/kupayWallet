const express = require('express');
const router = express.Router();

const card = require('../controllers/cardControllers ');
const client = require('../controllers/clientControllers ');
const product = require('../controllers/productControllers');
const transaction = require('../controllers/transactionControllers');
const wallet = require('../controllers/walletControllers');
const sigin = require('../controllers/siginControllers ');


router.get('/card', card.get);
router.get('/card/:id', card.getId);
router.post('/card', card.save);
router.post('/card/:id', card.update);
router.delete('/card/:id', card.deletes);

router.get('/client', client.get);
router.get('/client/:id', client.getId);
router.post('/client', client.save);
router.post('/client/:id', client.update);
router.delete('/client/:id', client.deletes);

router.get('/product', product.get);
router.get('/product/:id', product.getId);
router.post('/product', product.save);
router.post('/product/:id', product.update);
router.delete('/product/:id', product.deletes);


router.get('/transaction', transaction.get);
router.get('/transaction/:id', transaction.getId);
router.post('/transaction', transaction.save);
router.post('/transaction/:id', transaction.update);
router.delete('/transaction/:id', transaction.deletes);



router.get('/wallet', wallet.get);
router.get('/wallet/:id', wallet.getId);
router.post('/wallet', wallet.save);
router.post('/wallet/:id', wallet.update);
router.delete('/wallet/:id', wallet.deletes);

router.get('/sigin',sigin.get);
router.post('/log/',sigin.getClient);
router.post('/sigin',sigin.save);





module.exports = router;
