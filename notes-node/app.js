console.log('Starting app.');

const fs = require('fs');
const os = require('os');
var user = os.userInfo();

//console.log(user)

fs.appendFile('output/greetings.txt', `Hello ${user.username}!`, function(err){
   if (err) {
       console.log('Unable to write to file');
   };
});
