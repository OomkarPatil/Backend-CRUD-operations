const express = require('express')
const router = express.Router();
const {
    getProduct,
    getProducts,
    addProduct,
    UpdateProduct,
    deleteProduct
} = require('../controller/product.controller')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', addProduct)
router.put('/:id', UpdateProduct)
router.delete('/:id', deleteProduct)

module.exports = router