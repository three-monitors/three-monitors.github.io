//

console.log(typeof(function(){})); // function

let message = hello5('World');
console.log(message); // hosting (підняття) / Hello World and me

// let test = "I'm test"; // error
// var test = "I'm test"; // hosting

function hello(name) {
    // body function
    // local scope
    console.log("Hello " + name); // Hello undefined
}
hello();

function hello1(name) {
    console.log("Hello " + name); // Hello World
}
hello1('World');

function hello2(name, me="me") {
    console.log("Hello " + name + " and " + me);  // Hello World and me
}
hello2('World');

function hello3(name, me="me") {
    console.log("Hello " + name + " and " + me); // Hello World and me // Hello World and Cats
}
hello3('World', 'Cats');
console.log(hello3('World')); // undefined

function hello4(name, me="me") {
    console.log("Hello " + name + " and " + me); // Hello World and me
    return "Bla bla bla"
}
console.log(hello4('World')); // Bla bla bla

function hello5(name, me="me") {
    return "Hello " + name + " and " + me
}
// let message = hello5('World');
// console.log(message); // Hello World and me
message = hello5('World', 'Cats');
console.log(message); // Hello World and Cats
console.log(hello5('World')); // Hello World and me

function hello6(name6, test, me="me") {
    if (test === undefined) {
        test = "Bla bla bla";
    }
    // test = test || "I`m test";
    // test = test ?? "I`m test";
    // return "Hello " + name6 + " and " + me + " " + test;
    return "Hello " + name6 + " and " + me + " " + test;
}
message6 = hello6('World', 'Cats');
console.log(message6); // Hello World and me Cats
console.log(hello6('World')); // Hello World and me Bla bla bla

function hello7(name7, test, me="me") {
    let msg = name7 ? '' : "Enter names value";
    console.log(msg); // Enter names value
    test = test ?? "I`m test";
    return "Hello " + name7 + " and " + me + " " + test;
}
hello7();
message7 = hello7('World', 'Cats');
console.log(message7); // Hello World and me Cats
console.log(hello7('World')); // Hello World and me I`m test

function hello8(name8, test, me="me") {
    let msg = name8 ? null : "Enter names value";
    if (msg) console.log(msg); // Enter names value
    console.log(msg); // Enter names value // null
    test = test ?? "I`m test";
    return "Hello " + name8 + " and " + me + " " + test;
}
hello8();
message8 = hello8('World', 'Cats');
console.log(message8); // Hello World and me Cats
console.log(hello8('World')); // Hello World and me I`m test

function calc(o, x, y) {
    switch (o) {
        case '+':
            return x + y;
        case '-':
            return x - y;
            default: return;
    }
}
let res = calc('+', 555, 555);
console.log(res); // 1100

let res2 = calc('-', 555, 555);
console.log(res2); // 0

let res3 = calc('.', 555, 555);
console.log(res3); // undefined

// hi(); // app.js:103 Uncaught ReferenceError: Cannot access 'hi' before initialization
let hi = function() {
    console.log("Hello function"); // Hello function
}
hi();

let hi2 = function(msg = "Hello function") {
    console.log(msg); // Hello function // Hello dogs
}
hi2(); // function
hi2("Hello dogs");

// callback
function greeting(name) {
    console.log("Hello " + name); // Hello Tom Cat
}
function hell(cb) {
    const name = prompt('Enter Your name: ') // Tom Cat
    cb(name);
}
// hell(greeting);

const hiYou = name => "Hello " + name;
console.log(hiYou('Cat')); // Hello Cat

const meToo = () => console.log("Hello me");
meToo();

const plus = (x, y) => console.log(x + y);
plus(55, 77);

(function(msg) {
    console.log(msg); // Hello LIFE
})("Hello LIFE");

function greet(msg, name) {
    console.log(msg + name); // Hello Tom // Hi Tom // Hello There
}

greet("Hello ", 'Tom');
greet("Hi ", 'Tom');
greet("Hello ", 'There');

function open() {
    console.log("It's open"); // It's open
}
function close() {
    console.log("It's close");
}
let sign = true;
sign ? open() : close();

function recursive(n) {
    if (n === 0) {
        console.log("Task completed!"); // Task completed! *1
        return;
    }
    console.log("Task doing somesing!"); // Task doing somesing! *5
    recursive(n - 1);
}
recursive(5);