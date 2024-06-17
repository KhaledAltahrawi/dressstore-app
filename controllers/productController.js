const Product = require('../models/product');

// Utility function to handle async controller functions
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Get all products
exports.getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get a product by ID
exports.getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

// Create a new product
exports.createProduct = asyncHandler(async (req, res) => {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json(newProduct);
});

// Update a product by ID
exports.updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

// Delete a product by ID
exports.deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
});

// Delete all products
exports.deleteAllProducts = asyncHandler(async (req, res) => {
    await Product.deleteMany();
    res.json({ message: 'All products deleted' });
});

// Find products by name
exports.findProductsByName = asyncHandler(async (req, res) => {
    const { name } = req.query;
    const query = name ? { name: { $regex: new RegExp(name, 'i') } } : {};
    const products = await Product.find(query);
    res.json(products);
});
