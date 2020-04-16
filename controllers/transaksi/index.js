const model = require('../../model');

async function getAllTransaksi(req, res) {
  try {
    const data = await model.Transaksi.getAllTransaksi();
    res.json({
      success: true,
      jumlah: data.length,
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function getOneTransaksi(req, res) {
  try {
    const idTransaksi = req.params.idTransaksi;
    const data = await model.Transaksi.getOneTransaksi(idTransaksi);
    res.json({
      success: true,
      ...data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function addTransaksi(req, res) {
  try {
    // Daftar Barang = [ {transaksi_id: auto, barang_id, jumlah} ]
    const daftarBarang = req.body;
    await model.Transaksi.addTransaksi(daftarBarang);
    res.json({
      success: true,
      message: 'Transaksi berhasil ditambah',
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

module.exports = {
  getAllTransaksi,
  getOneTransaksi,
  addTransaksi,
};
