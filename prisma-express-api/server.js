const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
