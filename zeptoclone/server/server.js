const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

console.log('=== Server Starting ===');
console.log('Port:', PORT);

// Configure CORS
const corsOptions = {
  origin: ['http://localhost:3002', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log('\n=== Incoming Request ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('======================\n');
  next();
});

// Mock data
const products = [
  {
    id: 1,
    name: 'Fresh Red Apples',
    price: 2.99,
    originalPrice: 3.49,
    discountPercentage: 15,
    unit: '500g',
    image: '/images/products/apple.jpg',
    inStock: true,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Organic Milk',
    price: 3.49,
    unit: '1L',
    image: '/images/products/milk.jpg',
    inStock: true,
    categoryId: 2,
  },
  {
    id: 3,
    name: 'Whole Wheat Bread',
    price: 2.49,
    originalPrice: 2.99,
    discountPercentage: 17,
    unit: '500g',
    image: '/images/products/bread.jpg',
    inStock: true,
    categoryId: 3,
  },
];

const categories = [
  { id: 1, name: 'Fruits & Vegetables', image: '/images/categories/fruits.jpg' },
  { id: 2, name: 'Dairy & Eggs', image: '/images/categories/dairy.jpg' },
  { id: 3, name: 'Bakery', image: '/images/categories/bakery.jpg' },
  { id: 4, name: 'Meat & Seafood', image: '/images/categories/meat.jpg' },
];

// Routes
app.use('/api/auth', authRoutes);

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/categories/:id', (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json(category);
});

app.get('/api/categories/:id/products', (req, res) => {
  const categoryProducts = products.filter(
    (p) => p.categoryId === parseInt(req.params.id)
  );
  res.json(categoryProducts);
});

// Test route
app.get('/api/test', (req, res) => {
  console.log('\n=== Test Route Called ===');
  res.json({ message: 'Server is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('\n=== Server Error ===');
  console.error('Error:', err);
  console.error('===================\n');
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log('\n=== Server Started ===');
  console.log(`Server running on port ${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/api/test`);
  console.log('=====================\n');
}); 