const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const moment = require("moment");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for pages
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact-us', (req,res) => res.render('contact'));
app.get('/process', (req,res) => res.render('process'));
app.get('/our-work', (req,res) => res.render('work'));

app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
