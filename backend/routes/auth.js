
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();



router.post('/register', async (req, res) => {
  
  const { username, password, email } = req.body;
  try {
    const user = new User({ username, password,email });
    await user.save();
    res.status(201).json({message: "Successfully Registered", status: 201})
    
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {


  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
    
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
