// Знайти елемент ul у документі та запам'ятати його у змінній ul.
const ul = document.querySelector('ul');
console.log(ul);

// За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. Якщо елемент відсутній, створити його зі значенням [].
const itemsArray = JSON.parse(localStorage.getItem('items')) || []
console.log(itemsArray);

// Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.

function addTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}
console.log(ul)

// Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.

itemsArray.forEach(item => addTask(item));
document.body.appendChild(ul) // відобразити ul на сторінці

// Знайти елемент input у документі та запам'ятати його у змінній input.
const input = document.getElementById('item');
console.log(input); // TagName ='input' id='item'

// Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.
function add() {
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addTask(input.value);
    document.getElementsByTagName('button').onclick = function() {
        document.getElementsByTagName('li').innerHTML = document.getElementById('item').value;
    }
}

// Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.
function del() {
    localStorage.removeItem('items');
    ul.innerHTML = '';
    document.getElementsByTagName('button').onclick = function() {
        document.getElementsByTagName('ul').innerHTML = "";
        itemsArray = [];
    }
}