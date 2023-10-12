const express = require('express');
const app = express();

// Serve static files from the "public" directory (where your HTML file is located).
app.use(express.static('public'));

// Start the server on port 3000.
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

