console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();

var res = notes.addNote('Si', 'Se puede');

console.log(res);

fs.appendFile('output/greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
   if (err) {
       console.log('Unable to write to file');
   };
});
