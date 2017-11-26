const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
   res.send('Hello!!');
});


app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'Could not process request'
   });
});
app.listen(3000);