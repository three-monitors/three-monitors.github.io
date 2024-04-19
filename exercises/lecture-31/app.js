const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
  
        xhr.onload = () => {
            if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
            resolve(xhr.response);
        }
        };

        xhr.onerror = () => {
            reject('Something went wrong!');
        };
    });

    return promise;
};

xhrPromise("GET", url)
.then(response => {
    const posts = JSON.parse(response)
    let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    return xhrPromise("GET", "https://jsonplaceholder.typicode.com/users");
})

// Продовжити ланцюжок промісів, використовуючи метод then, де потрібно звернутись до сервера https://jsonplaceholder.typicode.com/users і для кожного userId отримати ім'я user, після чого помістити це ім'я всередину елемента з класом "author".

// .then(() => {
//     const users = document.querySelectorAll('.author');
//     users.forEach(user => {
//         xhrPromise('GET', `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
//         .then(response => {
//             let userName = new Array(JSON.parse(response))
//             user.textContent = userName.name
//         })
//     })
// })

.then(response => {
    const users = JSON.parse(response);
    const idName = users.map(user => [user.id, user.name]);
    const userAauthors = document.querySelectorAll('.author');
    userAauthors.forEach(userAauthor => {
        const userId = userAauthor.dataset.id;
        const user = idName.find(([id, name]) => id == userId);
        if (user) {
            userAauthor.textContent = user[1]; // user[0] == id, user[1] == name

        } else {
            xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
            .then(response => {
                let userName = JSON.parse(response);
                userAauthor.textContent = userName.name;
            })
        }
    });
})