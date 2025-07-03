const express = require('express');
const app = express();

app.use(express.json());

// Routes
// app.get('/', (req, res) => { res.send('Hello World'); });
app.use('/api/books', require('./routes/books'));

// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next();
// });

module.exports = app;