const db = require('../db');

const tableName = 'barang';

async function getAllBarang() {
  try {
    const allBarang = await db.select().from(tableName);
    return allBarang;
  } catch (err) {
    return err;
  }
}

async function getOneBarang(id) {
  try {
    const oneBarang = db(tableName).where('id', id);
    return oneBarang;
  } catch (err) {
    return err;
  }
}

async function addBarang(value) {
  try {
    const indexBarang = await db(tableName).insert(value);
    return indexBarang;
  } catch (err) {
    return err;
  }
}

async function updateBarang(value, id) {
  try {
    const hasilUpdate = await db(tableName).where(id).update(value);
    return hasilUpdate;
  } catch (err) {
    return err;
  }
}

async function deleteBarang(id) {
  try {
    const hasilHapus = await db(tableName).where('id', id).del();
    return hasilHapus;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getAllBarang,
  getOneBarang,
  addBarang,
  updateBarang,
  deleteBarang,
};
