const express = require('express')
const userControllers = require('../controllers/users')



const router = express.Router()

router.get('/',userControllers.getUsers)
