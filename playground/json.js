/*
  var obj = {
    name: 'Joseph',
    age: 28
    };

  var stringObj = JSON.stringify(obj);
  console.log(typeof(stringObj));
  console.log(stringObj);
*/

/*
 let personString = '{"name":"Joseph", "age":28}';
 let person = JSON.parse(personString);
 console.log(typeof person);
 console.log(person);
 */

const fs = require('fs');
let originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

onString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', onString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);