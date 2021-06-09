const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('Ok!');
});

app.listen(5000);