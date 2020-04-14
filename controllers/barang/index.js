const model = require('../../model');

async function getAllBarang(req, res) {
  try {
    const hasil = await model.getAllBarang();
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
  getAllBarang,
};
