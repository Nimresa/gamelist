const { response } = require('express');
const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    response.send('<p> home page </p>');
});