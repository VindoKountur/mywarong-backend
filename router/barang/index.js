const express = require('express');
const router = express.Router();

const controllers = require('../../controllers');

router
  .route('/')
  .get(controllers.barang.getAllBarang)
  .post(controllers.barang.addBarang);

router
  .route('/:idBarang')
  .get(controllers.barang.getOneBarang)
  .patch(controllers.barang.updateBarang)
  .delete(controllers.barang.deleteBarang);

module.exports = router;
