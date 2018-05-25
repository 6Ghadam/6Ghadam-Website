const express = require('express');
const { join } = require('path');

const app = express();

app.use('/static', express.static(join(__dirname, 'build/static')));

app.use((req, res) => {
  res.sendFile(join(__dirname, 'build/index.html'));
});

app.listen(5001);
