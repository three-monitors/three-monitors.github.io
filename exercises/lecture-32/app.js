// 1. Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js

const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

// const xhrPromise = (method, url) => {
//     const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.send();
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//             reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         };
//         xhr.onerror = () => {
//             reject('Something went wrong!');
//         };   
//     });
//     return promise;
// };

// console.log(xhrPromise("GET", url));

async function fetchData(url) {
    return await fetch(url, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        if(response.status >= 400) {
            return response.json().then(err => {
                const error = new Error('Something went wrong!')
                error.data = err
                throw error
            })
        }
        return response.json()
    })
}

console.log(fetchData(url))

// xhrPromise("GET", url)
fetchData(url)
    .then(response => {
    // const posts = JSON.parse(response)
    const posts = response
		let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
})

.then(() => {
    const users = document.querySelectorAll('.author');
    users.forEach(user => {
        // xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
        fetchData('https://jsonplaceholder.typicode.com/users/${user.dataset.id}')
        .then(response => {
            // let userName = JSON.parse(response)
            let userName = response
            console.log(userName.name)
            user.textContent = userName.name
        })
    })
});