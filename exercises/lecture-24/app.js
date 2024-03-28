// 1. Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
// const colors = ['blue', 'green', 'white'];
// Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль. Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.
const colors = ['blue', 'green', 'white'];
function iter(item) {
    console.log(item);
}
colors.forEach(iter);
// blue
// green
// white

// 2. Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
// const colors = ['blue', 'green', 'white'];
// 2.1. Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів. Повідомлення має містити значення «item» і значення «index» - ${item} has index ${index}. Використовуючи forEach() та функцію iterate, вивести в консоль значення кожного кольору
function iterate(item, index) {
    console.log(`${item} has index ${index}`);
}
colors.forEach(iterate);
// blue has index 0
// green has index 1
// white has index 2

// 2.2. Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!', коли функція виконує останню ітерацію для елементів colors.
function iterate2(item, index, array) {
    // console.log(item);
    if (index === array.length - 1) {
    console.log('The last iteration!');
    }
}
colors.forEach(iterate2);
// blue (no task)
// green (no task)
// white (no task)
// The last iteration!

// 3. Маємо масив letters
// const letters = ['a', 'b', 'c'];
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window». Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».
const letters = ['a', 'b', 'c'];
function iterate3(letter) {
    console.log(this === window); // true
}
// letters.forEach(iterate3); // 3 "true" (no task)

// 4. Маємо масив під назвою Numbers.
// const Numbers = [22, 3, 4, 10];
// Встановити, чи всі числа масиву парні методом forEach()
const numbers = [22, 3, 4, 10];
let pairedNumbers = true;
numbers.forEach(function(number) {
    if (number % 2 === 1) {
        pairedNumbers = false;
        // Break here
    }
});
console.log(pairedNumbers); // => false

// 5. Маємо масив під назвою numbers.
// const numbers = [22, 3, 4, 10];
// Встановити, чи всі числа масиву парні методом every()
const pairedNumbers2 = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(pairedNumbers2); // => false

// 6. Маємо масив під назвою fruits
// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову fruit === "blueberries".
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); // 3
// console.log(fruits[index]); // blueberries (no task)

// 7. Маємо масив під назвою arr
// const arr = [7, 33, 47, 99, 2, 103, 79];
// Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.
const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find(element => element > 10);
console.log(found); // 33

// 8. Маємо масив під назвою array
// const array = [1, 2, 3, 4, 5];
// Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0; // checks whether an element is even
console.log(array.some(even)); // true

// const greaterThanTen = (element) => element > 10; // checks whether an element is greater than 10 (no task)
// console.log(array.some(greaterThanTen)); // false (no task)

// 9. Маємо масив під назвою numbers
// const numbers = [1, 30, 4, 21, 100000];
// Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.
const numbers2 = [1, 30, 4, 21, 100000];
numbers2.sort();
console.log(numbers2); // [1, 100000, 21, 30, 4]
// сортування даних (рядків) в алфавітному порядку за зростанням

const numbers3 = [1, 30, 4, 21, 100000];
numbers3.sort(function(a, b) {
    return a - b;
});
console.log(numbers3); // [ 1, 4, 21, 30, 100000 ]
// сортування чисел у порядку зростання