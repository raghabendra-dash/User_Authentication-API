const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

module.exports = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error('Error connecting to MongoDB:', err);
      } else {
        console.log('MongoDB connected');
      }
    }
  );
};
