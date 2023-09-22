
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const itemRoutes = require('./routes/items');


app.use('/api/items', itemRoutes);

fetch('/api/items')
  .then((response) => response.json())
  .then((data) => {
    
  })
  .catch((error) => {
  
  });
