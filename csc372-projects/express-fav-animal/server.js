const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/butterfly', (req, res) => res.sendFile(__dirname + '/public/butterfly.html'));
app.get('/bunny', (req, res) => res.sendFile(__dirname + '/public/bunny.html'));

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(3000, () => console.log('Server running on port 3000'));