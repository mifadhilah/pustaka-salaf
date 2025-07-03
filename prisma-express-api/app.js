const express = require('express');
const prisma = require('./config/prisma');
const app = express();

app.use(express.json());

// Routes
// app.get('/', async (req, res) => {
//   const query = await prisma.category.findMany();

//   res.json(query)
// });
app.use('/api/books', require('./routes/books.route'));

module.exports = app;
