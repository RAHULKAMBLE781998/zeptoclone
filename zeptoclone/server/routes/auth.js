const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// JWT Secret Key (in production, this should be in environment variables)
const JWT_SECRET = 'your-secret-key-here';

// Mock user data with more details
const mockUser = {
  id: 1,
  username: 'rahul98',
  name: 'Rahul Sharma',
  email: 'rahul@example.com',
  phone: '+91 9876543210',
  addresses: [
    {
      id: 'addr1',
      type: 'home',
      address: '123 Main St, Apt 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      isDefault: true
    }
  ],
  paymentMethods: [
    {
      id: 'pm1',
      type: 'card',
      last4: '4242',
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true
    }
  ],
  orders: [
    {
      id: 'ord1',
      orderNumber: 'ZEP12345',
      date: '2024-03-15',
      status: 'delivered',
      total: 1250.00,
      items: 5
    },
    {
      id: 'ord2',
      orderNumber: 'ZEP12346',
      date: '2024-03-20',
      status: 'out_for_delivery',
      total: 850.00,
      items: 3
    }
  ]
};

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// Login endpoint
router.post('/login', (req, res) => {
  console.log('Login attempt:', req.body);
  
  const { username, password } = req.body;

  // Check credentials
  if (username === 'rahul98' && password === 'okok') {
    console.log('Login successful for user:', username);
    
    // Create JWT token
    const token = jwt.sign(
      { 
        id: mockUser.id,
        username: mockUser.username,
        name: mockUser.name,
        email: mockUser.email
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      user: mockUser,
      token
    });
  } else {
    console.log('Login failed - invalid credentials');
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Get user profile endpoint (protected route)
router.get('/profile', verifyToken, (req, res) => {
  // The user is already verified by the middleware
  res.json({
    success: true,
    user: mockUser
  });
});

// Verify token endpoint
router.post('/verify', verifyToken, (req, res) => {
  res.json({
    success: true,
    message: 'Token is valid',
    user: req.user
  });
});

module.exports = router; 