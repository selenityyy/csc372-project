const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

app.use(express.static('public'));
app.use(express.static(__dirname + '/../express-fav-animal/public'));

// set up handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/butterfly', (req, res) => res.render('butterfly', { title: 'Butterfly' }));
app.get('/bunny', (req, res) => res.render('bunny', { title: 'Bunny' }));

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Not Found' });
});

// 500 handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: '500 - Server Error' });
});

app.listen(3000, () => console.log('Server running on port 3000'));