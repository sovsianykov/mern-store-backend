const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require("path");
const productsRoutes = require('./backend/routes/products')
const colors = require('colors')
const mongoDB = require('./backend/config/db')
const { errorHandler } = require('./backend/middleware/errorMiddleware')



const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT


app.use('/api/products', productsRoutes)

if (process.env.NODE_ENV === 'production') {
 app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html'))
  })
}


app.use(errorHandler)

mongoDB()



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.underline.cyan)})







