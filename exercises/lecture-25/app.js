// 1. Маємо масив list
// const list = ['html', 'css', 'javascript', 'react.js'];
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.
const list = ['html', 'css', 'javascript', 'react.js'];
let ul = document.createElement('ul'); // створюємо невпорядкований список <ul>
for (let elem of list) {
    let li = document.createElement('li');
    li.textContent = elem;
    ul.appendChild(li);
}
console.log(ul)
// <ul>
//     <li>
//          "html"
//     </li>
//     <li>
//          "css"
//     </li>
//     <li>
//          "javascript"
//     </li>
//     <li>
//          "react.js"
//     </li>
// </ul>

document.body.appendChild(ul) // додаємо створений список на сторінку
// html
// css
// javascript
// react.js

// 2. Маємо масив listWithHref
// const listWithHref = [
//     {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
//     {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
//     {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
//     {'react.js': "https://react.dev"}
// ];
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом "a" з відповідним посиланням. Наприклад, для першого елемента списку:

//   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
// Додайте створений список на сторінку.

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

// Варіант 1 // "<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>"
let ol = document.createElement('ol'); // створюємо впорядкований список <ul>
for (var i = 0; i < listWithHref.length; i++) {
    let li = document.createElement('li');
    let href = Object.values(listWithHref[i]);
    let tag = Object.keys(listWithHref[i]);
    li.textContent = '<a href="' + href + '">' + tag + '</a>';
    ol.appendChild(li);
}
console.log(ol)
document.body.appendChild(ol) // додаємо створений список на сторінку

// Варіант 2 // <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
let ol2 = document.createElement('ol'); // створюємо впорядкований список <ul>
for (var i = 0; i < listWithHref.length; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');

    let href = Object.values(listWithHref[i]);
    let tag = Object.keys(listWithHref[i]);

    link.setAttribute('href', href);
    link.textContent = tag;
    
    ol2.appendChild(li);
    li.appendChild(link);
    document.body.appendChild(ol2);
}
console.log(ol2)

// 3. Маємо масив students
// const students = [
//     {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
//     {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
//     {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
//     {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
// ]
// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

let trHead = document.createElement('tr');
let th1 = document.createElement('th');
	th1.textContent = "firstName";
	trHead.appendChild(th1);
let th2 = document.createElement('th');
	th2.textContent = "lastName";
	trHead.appendChild(th2);
let th3 = document.createElement('th');
	th3.textContent = "degree";
	trHead.appendChild(th3);

thead.appendChild(trHead);
document.body.appendChild(trHead);

for (let student of students) {
	let trBody = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = student.firstName;
	trBody.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = student.lastName;
	trBody.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = student.degree;
	trBody.appendChild(td3);
	
    tbody.appendChild(trBody);
    document.body.appendChild(trBody);
}
console.dir(table) // table