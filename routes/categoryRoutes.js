// marketplace-app/routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Route to get all categories
router.get('/api/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get a category by ID
router.get('/api/categories/:id', getCategory, (req, res) => {
    res.json(res.category);
});

// Route to add a new category
router.post('/api/categories', async (req, res) => {
    const category = new Category({
        name: req.body.name
    });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update a category by ID
router.put('/api/categories/:id', getCategory, async (req, res) => {
    if (req.body.name != null) {
        res.category.name = req.body.name;
    }

    try {
        const updatedCategory = await res.category.save();
        res.json(updatedCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a category by ID
router.delete('/api/categories/:id', getCategory, async (req, res) => {
    try {
        await res.category.remove();
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get category by ID from database
async function getCategory(req, res, next) {
    let category;
    try {
        category = await Category.findById(req.params.id);
        if (category == null) {
            return res.status(404).json({ message: 'Cannot find category' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.category = category;
    next();
}

module.exports = router;
