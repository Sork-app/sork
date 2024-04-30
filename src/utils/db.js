const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Sork is connected to MongoDB.'))
  .catch(err => console.error('❌ Sork failed to connected to MongoDB:', err));

module.exports = mongoose;

