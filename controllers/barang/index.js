const model = require('../../model');

async function getAllBarang(req, res) {
  try {
    const hasil = await model.Barang.getAllBarang();
    res.json({
      success: true,
      data: hasil,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function getOneBarang(req, res) {
  try {
    const hasil = await model.Barang.getOneBarang(req.params.idBarang);
    if (hasil.length === 0) {
      res.json({
        message: 'Barang yang dicari tidak ada',
      });
    } else {
      res.json({
        success: true,
        data: hasil,
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function addBarang(req, res) {
  try {
    const newBarang = req.body;
    const [id] = await model.Barang.addBarang(newBarang);
    res.json({
      success: true,
      idBarang: id,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function updateBarang(req, res) {
  try {
    const idBarang = {
      id: req.params.idBarang,
    };
    const value = req.body;
    const updateBarang = await model.Barang.updateBarang(value, idBarang);
    res.json({
      success: true,
      message: 'barang berhasil diupdate',
      updateBarang,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

async function deleteBarang(req, res) {
  try {
    const id = req.params.idBarang;
    const hapusBarang = await model.Barang.deleteBarang(id);
    res.json({
      success: true,
      message: `Barang berhasil dihapus ${hapusBarang}`,
      hapusBarang,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
}

module.exports = {
  getAllBarang,
  getOneBarang,
  addBarang,
  updateBarang,
  deleteBarang,
};
