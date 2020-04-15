const express = require('express');

const router = express.Router();

const controller = require('../../controllers');

router.route('/').get(controller.transaksi.getAllTransaksi);

module.exports = router;
