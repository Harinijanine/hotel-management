const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Dummy admin credentials
const adminUser = {
  username: 'admin',
  password: bcrypt.hashSync('adminpassword', 10),
};

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username === adminUser.username && bcrypt.compareSync(password, adminUser.password)) {
    const token = jwt.sign({ username: adminUser.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
