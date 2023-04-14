const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("My Phone Information coming Soon toon hobe");
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('I Need data for id: ', id);

    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.listen(port, () => {
    console.log(`My phone server is running on port: ${port}`);
})