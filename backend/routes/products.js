const express = require('express')
const productsControllers = require('../controllers/products')

const router = express.Router()


router.post('/',productsControllers.createProduct)

router.get('/',productsControllers.getAllProducts)

router.delete('/:id',productsControllers.deleteProduct)

router.put('/:id',productsControllers.updateProduct)

module.exports = router
