
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/meanstack')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
