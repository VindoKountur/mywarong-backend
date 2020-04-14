const model = require('../../model');

async function getAllTransaksi(req, res) {
  try {
    const hasil = await model.getAllTransaksi();
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

module.exports = {
  getAllTransaksi,
};
