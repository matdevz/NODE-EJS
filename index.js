const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let usersInfo = [
    {
        name: 'Mateus',
        age: 17,
    },
    {
        name: 'Paula',
        age: 25,
    },
    {
        name: 'Paulo',
        age: 28,
    },
    {
        name: 'Pedro',
        age: 16,
    },
    {
        name: 'Carla',
        age: 18,
    },
    {
        name: 'Carlo',
        age: 15,
    },
];

app.get('/', (req, res) => {
    res.render('user', { users: usersInfo });
});

app.listen(3000);
