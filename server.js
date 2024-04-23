const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('./config/passportConfig')();
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
require('./config/dbConnect')();

const app = express();

// Middleware
app.use(express.json());

// Initialize passport
app.use(passport.initialize());

// Routes
app.use('/', authRoutes);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
