const barang = require('./barang');
const transaksi = require('./transaksi');

module.exports = {
  getAllBarang: barang.getAllBarang,
  getAllTransaksi: transaksi.getAllTransaksi,
};
