/*
    node inspect (file) opens debug mode.

    list(#): Give you the # of lines above and below this line.

    n: Goes to the very next statement.

    c: Goes through the rest of the lines

    repl: Access the applicationa as it currently stands.
        You can manipulate the data. i.e. person.age = 100;

    You can insert "debugger;" into your code then type c
        into the terminal and you'll be able to stop where you want.        

    node --inspect-brk (file): Allows you to inspect in chrome browser.
        You'll type chrome://inspect into the address bar and that'll
        bring you to devtools page. Where you'll click on your remote app.
        */

var person = {
    name: 'Andrew'
};

person.age = 25;

debugger;
person.name = 'Joe';

console.log(person);