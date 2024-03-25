console.dir(document) // #document
console.dir(document.html) // undefined
console.dir(document.head) // head
console.dir(document.title) // <h1>My site</h1>
console.dir(document.body) // body
console.dir(document.body.childElementCount) // 10
console.dir(document.body.firstElementChild) // svg
console.dir(document.body.lastElementChild) // script
console.dir(document.body.firstChild) // #text
console.dir(document.body.childNodes) // NodeList(32)
console.dir(document.body.children) // HTMLCollection(10)

for (const child of document.body.children) {
    console.dir(child)
}
// svg
// header.page-header.mb-3
// section#hero.hero.mt-5.mb-3
// section.py-5
// main.mb-3
// section#divider.divider.py-5.mb-3
// section#services mb-3
// hr
// footer.mb-3
// script


// section
console.dir(document.body.section) // undefined
console.dir(document.body.hero) // undefined

// getElementById
// getElementsByTagName
// getElementsByClassName
// getElementsByName
// querySelector
// querySelectorAll

// id
console.dir(document.getElementById('hero')) // section#hero.hero.mt-5.mb-3
const hero = document.getElementById('hero');


// querySelector
let h1 = hero.querySelector('h1');
console.log(h1) // <h1>15% offon new season!</h1>
console.dir(h1) // h1


// TagName
h1 = hero.getElementsByTagName('h1');
console.log(h1) // HTMLCollection [h1]
console.log(h1[0]) // <h1>15% offon new season!</h1>
console.log(h1[0].innerText) // 15% offon new season!

// h1[0].innerText = "Hello h1"
h1.innerText = "Hello element h1"

// h1.style.color = "white"
// h1.style.backgroundColor = "blue" // background-color
// float - cssFloat

// h1.style.cssText = "color:red; font: 600 2.5rem/1.7; padding: 1.5rem 2rem; text-align: center; background-color: gold;"


// динамічна зміна контенту
// hero.innerHTML = "<h1>Hero Section</h1>"
// document.body.innerHTML = "<h1>Hello world</h1>"

h1.className = "test-css"
// h1.classList.add("test-css", 'test-css2')
// h1.classList.remove("test-css")
// h1.classList.toggle("test-css") // перемикач
// h1.classList.toggle("test-css") // перемикач назад


// ClassName
let imgs = document.getElementsByClassName('image')
console.log(imgs) // HTMLCollection(6) [div.image, div.image, div.image, div.image, div.image, div.image]
console.log(imgs[0]) // div.image


// SelectorAll
imgs = document.querySelectorAll('.image img')
console.log(imgs[0]) // <img src="images/product-6.jpg" alt="Picture for product 6" height="200">

imgs[0].setAttribute('src', './images/product-5.jpg')
imgs[3].setAttribute('src', './images/product-4.jpg')

//
"use strict";

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

const currency = total => parseFloat(Math.round(total * 100) / 100).toFixed(2);

function Cart(tax = 0.07, shipping = 0) {
    this.tax = tax;
    this.shipping = shipping;

    let cart = [];
    this.saveCart = function() {
        console.log(cart);
    }

    function Item (id, price, amount) {
        this.id = id;
        this.price = price;
        this.amount = amount;
    }
    this.addItemToCart = function(product) {
        for (let item in cart) {
            if(cart[item].id === product.id) {
                cart[item].amount += product.amount;
                this.saveCart();
                return;
            }
        }
        let item = new Item(product.id, product.price, product.amount);
        cart.push(item);
        this.saveCart();
    }
    this.setCountForItem = function(id, amount) {
        for (let i in cart) {
            if(cart[i].id === id) {
                cart[i].amount = amount;
            }
        }
    }
    this.totalAmount = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].amount;
        }
        return total;
    }
    this.totalInCart = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].price * cart[item].amount;
        }
        return currency(total*(1 + this.tax) + this.shipping);
    }
    this.removeItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id)
            cart[item].amount--;
            if (cart[item].amount === 0) {
                cart.splice(item, 1)
            }
            break;
        }
        this.saveCart();
    }
    this.removeAllItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1)
                break;
            }
        }
        this.saveCart();
    }
    this.clearCart = function() {
        cart = [];
        this.saveCart();
    }
}

// #! Заблокувати href

const productContainer = document.querySelector('.product-container')
// let addToCart = productContainer.querySelector('.add-to-cart')
// let showDetail = productContainer.querySelector('.add-to-cart')
// // console.dir(addToCart)
// addToCart.addEventListener('click', () => {
//     console.dir(addToCart)
// })
// const dialog = document.getElementById('detail');
// showDetail.addEventListener('click', () => {
//     // console.dir(showDetail)
//     dialog.showModal();
// })

// dialog.querySelector('.close').addEventListener('click', () => {
//     dialog.close();
// })

let shoppingCart = new Cart();

function CardProduct(item) {
    this.item = item;
    let addToCart = this.item.querySelector('.add-to-cart');
    addToCart.addEventListener('click', function(event) {
        // console.log(event.target)
        let parent = event.target.closest('.product');
        let price = parent.querySelector('.product-price').innerText
        let name = parent.querySelector('.product-name').innerText
        let id = parent.querySelector('.content').getAttribute('id');
        console.log(id, price, name)

        let product = new Product(id, name, price);
        product = {...product, amount: 1}
        console.log(product)
        shoppingCart.addItemToCart(product);
        console.log(shoppingCart.totalAmount())
        console.log(shoppingCart.totalInCart())
    });
}
let productCards = productContainer.querySelectorAll('.product');
for (const item of productCards) {
    new CardProduct(item);
};

// for (const item of addToCartButtons) {
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
// }

function main() {

}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}