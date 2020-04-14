const Barang = require('./Barang');
const Transaksi = require('./Transaksi');

module.exports = {
  getAllBarang: Barang.getAllBarang,
  getAllTransaksi: Transaksi.getAllTransaksi,
};
