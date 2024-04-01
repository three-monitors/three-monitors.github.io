let ul = document.createElement('ul');

let li = document.createElement('li');

console.dir(ul) // li
// console.dir(li) // li

ul.append(li) // childNodes: NodeList [li] // children: HTMLCollection [li]

li.textContent = "Li item 1" // innerHTML: "<li>Li item 1</li>" // innerText: "Li item 1" // textContent: "Li item 1"

document.body.appendChild(ul)