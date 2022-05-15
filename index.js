const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let userInfo = {
    name: 'Mateus Henrique',
    age: 17,
};

app.get('/', (req, res) => {
    res.render('user', userInfo);
});

app.listen(3000);
