let quote = "It's a beautiful day";
// let quote = 'It is a beautiful day';
// let quote = `It is a beautiful day`;

let str = "He said, \"It's a beautiful day\"";
console.log(str);

let str2 = 'He said, "It\'s a beautiful day"';
console.log(str2);

let str3 = `He said, "It's a beautiful day"`;
console.log(str3);
console.log(str3.length);

console.log(str3[7]); // , // 0 - n-1
console.log(str3[8]); //  
console.log(str3[9]); // "
console.log(str3[10]); // I
console.log(str3[0]); // H
console.log(str3[30]); // "

console.log(str3[str3.length - 1]); // "
console.log(str3[str3.length - 2]); // y

console.log(str3.slice(-1)); // " // last simbol
console.log(str3.slice(1)); // 
console.log(str3.slice(1)); // e said, "It's a beautiful day"
console.log(str3.slice(0)); // He said, "It's a beautiful day"

console.log(str3.charAt(str3.length-1)); // "
console.log(str3.charAt(str3.length-3)); // a

// concatenation

let test ="He said, ";
console.log(test + quote); // He said, It's a beautiful day
console.log(test.concat(quote)); // He said, It's a beautiful day

let firstName = "James";
let lastName = "Bond";

function fullName(a, b) {
    return a + ' ' + b;
}
console.log(fullName(firstName, lastName)); // James Bond

let template = (
    "<div>" +
        "<h1> My Name is " + fullName(firstName, lastName) + "</h1>" +
    "</div>"
);
console.log(template); // <div><h1> My Name is James Bond</h1></div>

let template2 = `
<div>
<h1> My Name is fullName(firstName, lastName)</h1>
</div>
`;
console.log(template2); // <div>
                        // <h1> My Name is fullName(firstName, lastName)</h1>
                        // </div>

let template3 = `
<div>
<h1> My Name is ${fullName(firstName, lastName)}</h1>
</div>
`;
console.log(template3); // <div>
                        // <h1> My Name is James Bond</h1>
                        // </div>

let template4 = (x, y) => `
<div>
<h1> My Name is ${fullName(x, y)}</h1>
</div>
`;
console.log(template4(firstName, lastName)); // <div>
                                             // <h1> My Name is James Bond</h1>
                                             // </div>

console.log(str.indexOf('H')); // 0
console.log(str.indexOf('b')); // 17
console.log(str.indexOf('i')); // 5
console.log(str.indexOf('j')); // -1 // missing

let t1 = 'i'.toUpperCase();
// t1 = t1.charAt(0);

// console.log('i'.toUpperCase()); // I
// console.log(t1); // I

// console.log(str.indexOf('i')); // 5
console.log(str.indexOf(t1)); // 10

const chunk = 'password';
const password = '123&password!R';

console.log(password.includes(chunk)); // true

// +044-123-456-7890
// const pattern = /^\+[0-9]{1}[0-9]{0, 2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
// .ru .su
// ^['.ru|.su] ^[xyz] /^[a-z]+[0-9]+$/

function validate(number) {
    const pattern = /^\+[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let matched = number.match(pattern);
    if (pattern.test(number)) {
        console.log("Phone number is valid", matched);
        return true;
    } else {
        console.log("Phone number is not valid", matched);
        return false;
    }
}
validate('+123-456-789-1234'); // Phone number is valid
validate('123-456-789-1234'); // Phone number is not valid
validate('+3-456-789-1234'); // Phone number is not valid

console.log(str.substring(5, 24)); // id, "It's a beautif // підрядок з 5 по 24 символ
console.log(str.substr(5, 24)); // id, "It's a beautiful da // підрядок 24 символи починаючи з 5 // deprecated застаріла
console.log("    test test      "); //     test test      
console.log("    test test      ".trim()); // test test

function isEmptyStr(str) {
    return (str ?? '') === '';
}
console.log("Is empty: ", isEmptyStr("")); // Is empty:  true
console.log("Is empty: ", isEmptyStr("test")); // Is empty:  false
console.log("Is empty: ", isEmptyStr("null")); // Is empty:  false
console.log("Is empty: ", isEmptyStr("underfined")); // Is empty:  false