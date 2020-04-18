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
    // { total_price, daftar_barang: [ { barang_id, jumlah} ] }
    const { total_price, daftar_barang } = req.body;
    await model.Transaksi.addTransaksi(total_price, daftar_barang);
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

async function updateTransaksi(req, res) {
  try {
    const transaksi_id = req.params.idTransaksi;
    const { total_price, daftar_barang } = req.body;

    const hasil = await model.Transaksi.updateTransaksi(
      transaksi_id,
      total_price,
      daftar_barang
    );
    if (hasil) {
      res.json({
        success: true,
        message: 'Berhasil update data',
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function deleteTransaksi(req, res) {
  try {
    const idTransaksi = req.params.idTransaksi;
    const dataTerhapus = await model.Transaksi.deleteTransaksi(idTransaksi);
    res.json({
      success: true,
      dataTerhapus,
      message: 'Berhasil hapus data',
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
  updateTransaksi,
  deleteTransaksi,
};
