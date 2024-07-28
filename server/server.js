const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Update the path to the HTML file
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
);

// Start the server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
