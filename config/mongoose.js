// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://RK-Swain:Radha579@cluster0.pizqeew.mongodb.net/test');
}
