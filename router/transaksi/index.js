const express = require('express');

const router = express.Router();

const controller = require('../../controllers');

router
  .route('/')
  .get(controller.transaksi.getAllTransaksi)
  .post(controller.transaksi.addTransaksi);

router.route('/:idTransaksi').get(controller.transaksi.getOneTransaksi);

module.exports = router;
