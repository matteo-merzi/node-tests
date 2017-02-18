const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Matteo',
        age: 31
    }, {
        name: 'Franco',
        age: 50
    }, {
        name: 'Carlo',
        age: 18
    }]);
});

app.listen(3000);

module.exports.app = app;