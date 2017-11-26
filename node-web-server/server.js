const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('home.hbs', {
        title: 'Hello',
        name: 'Luis',
        year: new Date().getFullYear()
    })
});

app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        title: 'About page',
        year: new Date().getFullYear()
    })
});


app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'Could not process request'
   });
});

app.listen(3000);

console.log('Server up listening to port 3000');