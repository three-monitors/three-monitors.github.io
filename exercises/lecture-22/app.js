// const classes = ['first', 'second', 'third', 'fourth'];

// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

let h1 = document.getElementsByTagName('h1')
console.log(typeof h1) // object
console.log(h1.length) // 4
for (i = 0; i < h1.length; i++) {
    console.log(h1[i]);
}
// <h1 class="title" id="first-title">First Title</h1>
// <h1 class="title" id="second-title">Second Title</h1>
// <h1 class="title" id="third-title">Third Title</h1>
// <h1 class="title" id="fourth-title">Fourth Title</h1>

// 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"
let p1 = document.querySelector('#p1');
console.log(p1)
// <p id="p1">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.
// </p>
p1.style.backgroundColor = "gold";
// <p id="p1" style="background-color: gold;">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.
// </p>

// 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
let p2 = document.querySelector('#p2');
p2.style.cssText = "background-color:gold; color: blue; font-size: 2rem"
console.log(p2)
// <p id="p2" style="background-color: gold; color: blue; font-size: 2rem;">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.
// </p>

// 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third

let p3 = document.querySelector('#p3');

p3.classList.add('third');
console.log(p3)
// <p id="p3" class="third">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.
// </p>

// 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border
let p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');
console.log(p4)
// <p id="p4" class="fourth border">
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusantium distinctio explicabo iure possimus natus obcaecati fugiat voluptas id, eveniet ab, voluptate repellat? Inventore voluptate perferendis sequi distinctio qui consectetur.
// </p>

// 6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
let container = document.getElementsByClassName('container')
console.dir(container) // HTMLCollection(4)
console.log(container)
// HTMLCollection(4) [div.container, div.container, div.container, div.container]

// перший елемент container для i = 0, i = 1, i = 2 та i = 3
for (i = 0; i < container.length; i++) {
    console.log(container[i]);
}

// перший елемент для кожного зі знайдених елементів container - header 
for (i = 0; i < container.length; i++) {
    console.dir(container[i].firstElementChild);
}
// <header>
// <header>
// <header>
// <header>

// або
container = document.querySelectorAll('.container');
for (let i = 0; i < container.length; i++) {
    console.log(container[i].firstElementChild);
}
// <header>
//      <h1 class="title" id="first-title">First Title</h1>
// </header>
// <header>
//      <h1 class="title" id="second-title">Second Title</h1>
// </header>
// <header>
//      <h1 class="title" id="third-title">Third Title</h1>
// </header>
// <header>
//      <h1 class="title" id="fourth-title">Fourth Title</h1>
// </header>

// 7. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
container = document.getElementsByClassName('container')
// вміст першого елементу для кожного першого елемента зі знайдених елементів
for (i = 0; i < container.length; i++) {
    console.log(container[i].firstElementChild.innerHTML);
}
// <h1 class="title" id="first-title">First Title</h1>
// <h1 class="title" id="second-title">Second Title</h1>
// <h1 class="title" id="third-title">Third Title</h1>
// <h1 class="title" id="fourth-title">Fourth Title</h1>

// текстовий вміст першого елементу для кожного першого елемента зі знайдених елементів
for (i = 0; i < container.length; i++) {
    console.log(container[i].firstElementChild.textContent);
}
// First Title
// Second Title
// Third Title
// Fourth Title

// 8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином
let headers = document.querySelectorAll('.container header')
console.log(container); // HTMLCollection(4) [div.container, div.container, div.container, div.container]
let classes = ["h1", "h2", "h3", "h4"];
console.log(classes); // (4) ['h1', 'h2', 'h3', 'h4']
for (let i = 0; i < headers.length; i++) {
    const h1 = headers[i].querySelector("h1");
    const newStr = document.createElement(classes[i] || "h1");
    newStr.textContent = h1.textContent;
    newStr.id = h1.id;
    newStr.className = h1.className;
    headers[i].replaceChild(newStr, h1);
    console.log(container[i].firstElementChild.innerHTML);
}
// <h1 id="first-title" class="title">First Title</h1>
// <h2 id="second-title" class="title">Second Title</h2>
// <h3 id="third-title" class="title">Third Title</h3>
// <h4 id="fourth-title" class="title">Fourth Title</h4>

// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином

// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth
headers = document.querySelectorAll('.container header')
classes = ["first", "second", "third", "fourth"];
for (let i = 0; i < headers.length; i++) {    
    headers[i].classList.add(classes[i]);
    console.log(headers[i].firstElementChild.innerHTML);
}
// First Title
// Second Title
// Third Title
// Fourth Title