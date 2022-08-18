const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 2500;

const route = require('./route');

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../frontend'));
app.set('view engine', 'ejs');
app.use(route);

app.listen(port, () => console.log(`Hosting on ${ port }`));