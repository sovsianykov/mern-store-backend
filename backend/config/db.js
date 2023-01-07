const mongoose = require("mongoose");



const mongoDB = async () =>{
  const conn  =  await   mongoose.connect('mongodb+srv://serhii:1111@cluster0.gjab3dl.mongodb.net/products?retryWrites=true&w=majority')
  await  console.log(`Mongo DB is running: ${conn.connection.host}`)
}

module.exports = mongoDB;
