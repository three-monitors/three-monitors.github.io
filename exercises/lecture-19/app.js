// 1. Маємо код
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
console.log(str1.length); // 13
"use strict"
console.log(str2.length); // 13

// 2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
// let string5 = 'Hello World';
let string5 = 'Hello World';

console.log(string5[0]); // H
console.log(string5.charAt(0)); // H

// 3. Повернути символ J рядка str3:
// let str3 = "Hello Javascript";
let str3 = "Hello Javascript";

console.log(str3[6]); // J
console.log(str3.charAt(6)); // J

// 4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3.slice(-1)); // t
console.log(str3[str3.length - 1]); // t

// 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка
function lastChar1 () {
    return (str3.slice(-1));
}
console.log(lastChar1 ()); // t

function lastChar2 () {
    return (str3[str3.length - 1]);
}
console.log(lastChar2 ()); // t

function lastChar3 () {
    return (str3.charAt(str3.length-1));
}
console.log(lastChar3 ()); // t

// 6. Маємо код
// let a = 'When candles are out,';
// let b = 'all cats are grey.';
// Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey
let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a.concat(" ").concat(b)); // When candles are out, all cats are grey.

// 7. Маємо код
// let fact = "Fifteen is the same as"
// let a = 5;
// let b = 10;
// Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as"
// let a = 5; // Identifier 'a' has already been declared
// let b = 10; // Identifier 'a' has already been declared
a = 5;
b = 10;

console.log(fact.concat(" ").concat(a+b)); // Fifteen is the same as 15
// або
// ... змінити значення fact ...
fact += " " + (a + b);
console.log(fact); // Fifteen is the same as 15

// 8. Маємо код
// let firstName = "Tom";
// let lastName = "Cat";
// Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName(firstName, lastName)); // Tom Cat

// 9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting(getFullName) {
    console.log("Hello, " + getFullName(firstName, lastName) + "!");
}
greeting(getFullName); // Hello, Tom Cat!

// 10. Використовуючи функцію greeting, створити такий шаблон:
// <div><h1>Hello, Tom Cat!</h1></div>
let sample = (x, y) => `
<div><h1>Hello, ${getFullName(x, y)}!</h1></div>
`
console.log(sample(firstName, lastName)); // <div><h1>Hello, Tom Cat!</h1></div>

// 11. Маємо наступний код:

// let string1 = "  The name of our game  ";
// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
let string1 = "  The name of our game  ";
console.log(string1.trim()); // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"

// const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
const phoneNumber = '\t  555-123\n ';
console.log("=> '" + phoneNumber.trim() + "'");
console.log("=> '" + phoneNumber.substring(3, 10) + " \\n'");

// 12. Маємо наступний код:
// let sentence = 'Always look on the bright side of life';
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
let sentence = 'Always look on the bright side of life';
sentence = `/${sentence}/gmi`;
let search_pattern1 = "look up";
let search_result1 = sentence.search(search_pattern1);
if (search_result1 >= 0) {
console.log("Searched Pattern is found");
} else {
console.log("Searched Pattern not found");
}
// Searched Pattern not found

let search_pattern2 = "look on";
let search_result2 = sentence.search(search_pattern2);
if (search_result2 >= 0) {
console.log("Searched Pattern is found");
} else {
console.log("Searched Pattern not found");
}
// Searched Pattern is found

let search_pattern3 = "look on";
let search_result3 = sentence.search(search_pattern3);
if (search_result3 >= 0) {
console.log("Searched Pattern is found at position : "+search_result3);
} else {
console.log("Searched Pattern not found");
}
// Searched Pattern is found at position : 8

// 13. Маємо наступний код
// let sentence = 'Always look on the bright side of life';
// Знайти індекс символу 'l'
let sentence2 = 'Always look on the bright side of life';
let search_pattern4 = "l";
let search_result4 = sentence2.search(search_pattern4);
if (search_result4 >= 0) {
console.log("Symbol index at position : " + search_result4);
} else {
console.log("Symbol index not found");
}
// Symbol index at position : 1

// Знайти індекс символу 'l', починаючи з 3-ї позиції
let sentence3 = sentence2.substring(3, sentence2.length - 1);
let search_pattern5 = "l";
let search_result5 = sentence3.search(search_pattern5);
if (search_result5 >= 0) {
console.log("Symbol index at position : " + (search_result5 + 3));
} else {
console.log("Symbol index not found");
}
// Symbol index at position : 7

// Знайти індекс символу 'L'
let sentence4 = 'Always look on the bright side of life';
let search_pattern6 = "L";
let search_result6 = sentence2.search(search_pattern6);
if (search_result6 >= 0) {
console.log("Symbol index at position : " + search_result6);
} else {
console.log("Symbol index not found");
}
// Symbol index not found

// 14. Маємо наступний код:
// let sentence = 'Always look on the bright side of life';
let sentence5 = 'Always look on the bright side of life';

// Отримати підрядок 'look on the bright side of life'
const NewSentence = sentence5.substring(7);
console.log(NewSentence); // look on the bright side of life

// Отримати підрядок 'Always'
const NewSentence2 = sentence5.substring(0, 6);
console.log(NewSentence2); // Always

// Отримати підрядок 'look'
const NewSentence3 = sentence5.substring(7, 11);
console.log(NewSentence3); // look

// 15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
let pattern7 = /^[0-9a-z-_]{8,16}$/;
// console.log(pattern7);

// 16. Створити регулярний вираз, який призначений для перевірки email на коректність.
const emailRegex = /[a-zA-Z0-9\.-_]+@[a-zA-Z\d\.-]+\.[a-zA-Z^'.ru|.su]{2,}/;

// 17. Маємо наступний код:
// let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
let sentence6 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
const NewSentence6 = sentence6.substring(0,50);
console.log(NewSentence6);

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
const NewSentence7 = sentence6.substr(0,50);
console.log(NewSentence7);