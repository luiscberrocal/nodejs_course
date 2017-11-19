console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var user = os.userInfo();

var res = notes.addNote('Si', 'Se puede');
var unique = _.uniq(['Luis', 1, 'mike', 1, 2, 3]);
console.log(unique);

fs.appendFile('output/greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
   if (err) {
       console.log('Unable to write to file');
   };
});
