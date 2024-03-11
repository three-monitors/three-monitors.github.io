// 
"use strict";

var y = 3.14e10; // 3.14E10
let c; // undefined
let c1 = null;
let b1 = true; // false
console.log(typeof(c));
console.log(typeof(c1)); // object
console.log(typeof(b1)); // boolean
let a = 2;
let b = 2;
const X = "HELLO";
console.log(typeof(X)); // string "" '' ``
// + - * / % **

{
let a = 3;
let y = 3;
--y;
y--; // 0
++a;
let c = (a + b) / y;
console.log(c);
}
b = 555;
// X = 3.14;
c = a + b;
console.log(c); // undefined

console.log(0.1 + 0.3); // 0.4

console.log(0.1 + 0.2); // 0.30000000000000004

console.log("33.a" * 0.2); // NaN

let v = "33.33" + " 0.2";  // 33.33 0.2
console.log(v);

let z = +"33.33" + +" 0.2"; //33.53
console.log(z);

let w = parseFloat("33.33") + +" 0.2"; //33.53
console.log(w);

let u = parseInt("33.33") + +" 0.2"; //33.2
console.log(u);

let p = 3.14159265359;
console.log(p.toFixed(2)); // => 3.14

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt + 12n); // 1234567890123456789012345678901234567902n

// alert(c);