const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3001);
