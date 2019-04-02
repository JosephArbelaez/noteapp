const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Joseph.');
fs.appendFileSync('notes.txt', ' I am the bestest in the westest!');