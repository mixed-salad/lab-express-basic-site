const express = require('express');
const hbs = require('hbs');
const app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.get('/home', function(request, response) {
    response.render('home');
});
app.get('/', function(request, response) {
    response.render('home');
});
app.get('/about', function(request, response) {
    response.render('about');
});
app.get('/works', function(request, response) {
    response.render('works');
});
app.get('/gallery', function(request, response) {
    response.render('gallery');
});

app.listen('3000');
