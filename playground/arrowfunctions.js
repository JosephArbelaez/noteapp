/*
    Arrow Functions

    In the parenthesis you'll have the parameters.
    Followed by brackets and all the commands you want.
    If you have only one line and are returning that line,
    you can also remove the brackets and return as below.

    Because arrow functions don't carry the "this" as in "this.name",
    we'll have to create a function without the arrow function in the object.
    Then we'll be able to access the template literal as below.
    
    An arrow functions arguments are pull from the global (window) arguements.
    A regular function's arguments are pulled from the parameters.

    */

let square = (x) => x * x;
console.log(square(8));

let user = {
    name: 'Joseph',
    sayHi: () =>{
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi(1, 2, 3);