const mongoose = require("mongoose");



const mongoDB = async () =>{
  const conn  =  await   mongoose.connect(process.env.MONGO_URL)
  await  console.log(`Mongo DB is running: ${conn.connection.host}`)
}

module.exports = mongoDB;
