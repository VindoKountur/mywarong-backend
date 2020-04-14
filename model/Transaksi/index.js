const db = require('../db');

const tableName = 'transaksi';

async function getAllTransaksi() {
  try {
    const hasil = await db.select().from(tableName);
    return hasil;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getAllTransaksi,
};
