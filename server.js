// marketplace-app/server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database.js');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();




// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', productRoutes);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
