// Маємо рядок fruits:

// const fruits = 'apple banana cantaloupe blueberries grapefruit';
// 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruits = 'apple banana cantaloupe blueberries grapefruit';
let array = fruits.split(" ", 5);
console.log(array);
// (5) ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit']

// 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
// apple
// banana
// cantaloupe
// blueberries
// grapefruit

// 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let n = 0;
while(n<array.length) {
    console.log(array[n])
    n++;
}
// apple
// banana
// cantaloupe
// blueberries
// grapefruit

// 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
n = 0;
do {
    console.log(array[n])
    n++;
} while(n<array.length)
// apple
// banana
// cantaloupe
// blueberries
// grapefruit

// 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
for (const number of array) {
    console.log(number)
}
// apple
// banana
// cantaloupe
// blueberries
// grapefruit

// in замість of (no task):
for (const number in array) {
    console.log(array[number])
}
// apple
// banana
// cantaloupe
// blueberries
// grapefruit

// 6. Маємо масив Numbs.
// const Numbs = [1,2,3,4,5,6,7,8,9,10];
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let n = 1; n < (Numbs.length + 1); n++) {
    if (n % 2 === 0)
    console.log(n)
}
// 2
// 4
// 6
// 8
// 10

// 7. Маємо масив names:
// const names = ['Batman'];
// Додати 'Joker' в кінець масиву names:
const names = ['Batman'];
names.push('Joker')
console.log(names)
// (2) ['Batman', 'Joker']

// 8. Маємо масив names:
// const names = ['Batman'];
// Додати 'Joker' на початок масиву names
const names2 = ['Batman'];
names2.unshift('Joker')
console.log(names2)
// (2) ['Joker', 'Batman']

// 9. Маємо масив names:
// names = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names3 = ['Batman', 'Joker', 'Bane'];
names3.unshift('Catwoman')
console.log(names3)
// (4) ['Catwoman', 'Batman', 'Joker', 'Bane']

// 10. Маємо масив names:
// names = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names3 = ['Batman', 'Joker', 'Bane'];
let names4 = ['Catwoman', ...names3];
console.log(names4)
// (4) ['Catwoman', 'Batman', 'Joker', 'Bane']

// 11. Маємо масив names
// names = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names5 = ['Batman', 'Joker', 'Bane'];
names5.splice(1, 0, 'Catwoman');
console.log(names5)
// (4) ['Batman', 'Catwoman', 'Joker', 'Bane']

// 12. Маємо масив names
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names6.splice(1, 2);
console.log(names6)
// (2) ['Batman', 'Bane']

// 13. Маємо масив names:
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names7.splice(1, 2, 'Alfred');
console.log(names7)
// (3) ['Batman', 'Alfred', 'Bane']

// 14. Маємо масив names:
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
console.log(names8.includes('Alfred')); // false
if (!names8.includes('Alfred')) {
    names8.push('Alfred');
}
console.log(names8); // (5) ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred']

// 15. Маємо масив names:
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
const names9 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
let index = names9.indexOf('Alfred'); 
if (index !== -1) {
    names9.splice(index, 1);
}
console.log(index) // -1
console.log(names9) // (4) ['Batman', 'Catwoman', 'Joker', 'Bane']