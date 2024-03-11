//

console.log(3 == '3'); // true
console.log(3 === '3'); // false

console.log(typeof(3), typeof('3'), 3 === '3'); // number string false
console.log(typeof(3), typeof('3'), 3 == '3'); // number string true

// && логічне множення

console.log( (3 === '3') && false); // false
console.log( (3 == '3') && false); // false
console.log( (3 == '3') && true); // true

// || or або

console.log( (3 === '3') || false); // false
console.log( (3 === '3') || true); // true
console.log( (3 == '3') || false); // true

// falsy: false 0 "" '' `` null underfined Nan
console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(0)); // false

// ! bang заперечення

console.log(Boolean(!0)); // true
{name: 'Hello'}
console.log(Boolean({name: 'Hello'})); // true
console.log(Boolean({name: 'Hello'} == null)); // false

console.log(Boolean(!{name: 'Hello'})); // false

let test = 0;
console.log(Boolean(!test)); // true

if (!test) {
    console.log("User text 0 value") // User text 0 value
}

console.log(typeof(test)); // number

if (test) {
    console.log("User text 0 value") // 
}

// 2 + 2

let numb = prompt("Type number:");
alert(numb); // 2 -> 2
alert(numb + numb); // 2 -> 22
alert(+numb + +numb); // 2 -> 4
alert(+numb + +numb); // w -> NaN

if (!isNaN(numb)) {
    alert(+numb + +numb); //
} else {
    alert('Type number pease') // Type number pease
}

let a = prompt("Type a:");
let b = prompt("Type b:");
let o = prompt("Type operation:");

// if (!isNaN(a) && !isNaN(b)) {
//     if (o == '+') {
//         alert(+a + +b);
//     } else if (o == '-') {
//         alert(+a - +b);
//     } else if (o == '*') {
//         alert(+a * +b);
//     } else {
//         alert('Bed operation');
//     } 

//     alert(+numb + +numb); //
// } else {
//     alert('Type number pease') // Type number pease
// }

switch (o) {
    case '+':
        alert(+a + +b);
        break;
    case '-':
        alert(+a - +b);
        break;
    case '*':
        alert(+a * +b);
        break;
    default:
        alert('Hello user');
}

let housesOwned = 1;
const wealth = housesOwned > 3 ? "rich"
                                : housesOwned > 1 ? "nothing to complain"
                                : 'poor';
console.log(wealth); // poor

let housesOwnedd = 2;
const wealthh = housesOwnedd > 3 ? "rich"
                                : housesOwnedd > 1 ? "nothing to complain"
                                : 'poor';
console.log(wealthh); // nothing to complain

let housesOwneddd = 4;
const wealthhh = housesOwneddd > 3 ? "rich"
                                    : housesOwneddd > 1 ? "nothing to complain"
                                    : 'poor';
console.log(wealthhh); // rich

let x = 0 ?? "hello";
console.log(x); // 0

x = null ?? "hello";
console.log(x); // hello

x = undefined ?? "hello";
console.log(x); // hello

x = false ?? "hello";
console.log(x); // false