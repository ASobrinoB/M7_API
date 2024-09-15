const express = require('express');
const {getProductById, addProduct, updateProductById, deleteProductById, getProducts} = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get    ('/get-product',    getProductById);
productRouter.get    ('/get-products',   getProducts);
productRouter.post   ('/add-product',    addProduct);
productRouter.put    ('/update-product', updateProductById);
productRouter.delete ('/delete-product', deleteProductById);

module.exports = productRouter;
