const bcrypt = require('bcrypt');

const plaintext = 'testing@123';

bcrypt.hash(plaintext, 12, (err, hash) => {
  console.log(hash);
  console.log(`Ori : ${plaintext}`);
});
