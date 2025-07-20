const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.API_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ message: 'API is alive!' });
});

// Routes
app.use('/api/books', require('./routes/books.route'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
