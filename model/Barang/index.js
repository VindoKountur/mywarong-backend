const db = require('../db');

const tableName = 'barang';

async function getAllBarang() {
  try {
    const hasil = await db.select().from(tableName);
    return hasil;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getAllBarang,
};
