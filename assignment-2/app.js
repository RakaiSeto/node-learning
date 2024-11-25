const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Users');
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Home');
    res.send('<h1>Home</h1>');
});

app.listen(3000)