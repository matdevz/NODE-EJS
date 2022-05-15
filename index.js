const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let usersInfo = [
    {
        id: 0,
        name: 'Mateus',
        age: 17,
    },
    {
        id: 1,
        name: 'Paula',
        age: 25,
    },
    {
        id: 2,
        name: 'Paulo',
        age: 28,
    },
    {
        id: 3,
        name: 'Pedro',
        age: 16,
    },
    {
        id: 4,
        name: 'Carla',
        age: 18,
    },
    {
        id: 5,
        name: 'Carlo',
        age: 15,
    },
];

app.get('/', (req, res) => {
    res.render('user', { users: usersInfo });
});

app.listen(3000);
