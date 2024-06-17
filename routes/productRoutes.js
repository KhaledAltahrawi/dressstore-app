// marketplace-app/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Product = require('../models/product');

// Route for welcome message
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to DressStore application.' });
});
// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get all products
router.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});





// Route to get a product by ID
router.get('/:id', productController.getProductById);

// Route to add a new product
router.post('/', productController.createProduct);

// Route to update a product by ID
router.put('/:id', productController.updateProduct);

// Route to delete a product by ID
router.delete('/:id', productController.deleteProduct);

// Route to delete all products
router.delete('/', productController.deleteAllProducts);

// Route to find products by name (using query parameter)
router.get('/search', productController.findProductsByName);

module.exports = router;
