// 1. Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js

const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
    <h3>${item.title}</h3>
    <div>${item.body}</div>
    <p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
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
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        });
        if (response.status >= 400) {
            const errorData = await response.json();
            const error = new Error('Something went wrong!');
            error.data = errorData;
            throw error;
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// xhrPromise("GET", url)
fetchData(url)
.then(posts => {
    let result = '';
    posts.forEach(item => {
        result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
    return fetchData("https://jsonplaceholder.typicode.com/users");
})
.then(users => {
    const idName = users.map(user => [user.id, user.name]);
    const authorElements = document.querySelectorAll('.author');
    authorElements.forEach(authorElement => {
        const userId = authorElement.dataset.id;
        const user = idName.find(([id, name]) => id == userId);
        if (user) {
            authorElement.textContent = user[1];
        } else {
		    // xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
            fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(user => {
                authorElement.textContent = user.name;
            })
            .catch(error => console.error('Error fetching user:', error));
        }
    });
})
.catch(error => console.error('Error:', error));