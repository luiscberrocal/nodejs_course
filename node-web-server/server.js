const express = require('express');

var app = express();

app.get('/', (req, res) => {
   res.send('Hello!!');
});


app.get('/bad', (req, res) => {
   res.send({
       errorMessage: 'Could not process request'
   });
});
app.listen(3000);