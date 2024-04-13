const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

// 1. У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми. Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті. Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!
setTimeout(myFunction, 5000);
function myFunction() {
    const firstName = demoForm.elements.firstName.value;
    console.log(firstName)
    const lastName = demoForm.elements.lastName.value;
    console.log(lastName)
    if (!firstName.trim() && !lastName.trim()) {
        document.getElementById('waiting').textContent = `
        I'm miss You
        `;        
    } else {
        document.getElementById('waiting').textContent = `
        Hello ${firstName} ${lastName}!
        `;
    }
}

// 2. Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().
const xhr = new XMLHttpRequest();
console.log(xhr)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.send();

// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат всередину елемента з id="demo".
xhr.onload = function() {
    const posts = JSON.parse(xhr.responseText);
    console.log(xhr.responseText)
    posts.forEach((post) => {
    document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML += template(post);
    });
}