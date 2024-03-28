// array

let numbers = [1, 2, 3, 5];
const array = Array(3).fill(0);

console.log(numbers) // (4) [1, 2, 3, 5]
console.log(array) // (3) [0, 0, 0]

numbers[1000] = 1000;
console.log(numbers) // (1001) [1, 2, 3, 5, empty × 996, 1000]

console.log(numbers[100]) // undefined

numbers.length = 3
console.log(numbers) // (3) [1, 2, 3]

numbers.length = 300 // no change without new console.log(numbers)

console.log(numbers) // (300) [1, 2, 3, empty × 297]


numbers = [1, 2, 3, 5, 7, 10, 11, 12];

// loop - цикли

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// 1
// 2
// 3
// 5
// 7
// 10
// 11
// 12

let n = 0;

while(n<numbers.length) {
    console.log(numbers[n])
    n++;
}
// 1
// 2
// 3
// 5
// 7
// 10
// 11
// 12

n = 0;

do {
    console.log(numbers[n])
    n++;
} while(n<numbers.length)
// undefined

n = numbers.length;

while(n<numbers.length) {
    console.log(numbers[n])
    n++;
}
// цикл ніколи не виконається (умова не дійсна)

do {
    console.log(numbers[n])
    n++;
} while(n<numbers.length)
// undefined (цикл виконається хоча б один раз)

for (const number of numbers) {
    console.log(numbers[number])
}
// 2
// 3
// 5
// 10
// 12
// 3 undefined

for (const number in numbers) {
    console.log(numbers[number])
}
// 1
// 2
// 3
// 5
// 7
// 10
// 11
// 12

numbers.push(555)
console.log(numbers)
// додати елемент справа
// (8) [1, 2, 3, 5, 7, 10, 11, 12]
// (9) [1, 2, 3, 5, 7, 10, 11, 12, 555]

numbers.pop()
console.log(numbers)
// видалити елемент справа
// (8) [1, 2, 3, 5, 7, 10, 11, 12]

numbers.shift()
console.log(numbers)
// видалити елемент зліва
// (7) [2, 3, 5, 7, 10, 11, 12]

numbers.unshift(3,6,8,9)
console.log(numbers)
// додати елементи зліва
// (11) [3, 6, 8, 9, 2, 3, 5, 7, 10, 11, 12]



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

    this.saveCart = function () {
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

    this.totalInCart = function () {
        let total = 0;
        for (let item in cart) {
            total += cart[item].price * cart[item].amount;
        }
        return currency(total*(1 + this.tax) + this.shipping);
    }

    this.removeItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart[item].amount--;
                if (cart[item].amount === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        this.saveCart();
    }
    this.removeAllItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1);
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

const product3 = new Product(3, 'Product 3 name', 31);
const product4 = new Product(4, 'Product 4 name', 21);

let shoppingCart = new Cart();

let productItem = {...product3, amount: 4};
shoppingCart.addItemToCart(productItem);
// [Item]
// 0: Item {id: 3, price: 31, amount: 4}

productItem = {...product4, amount: 2};
shoppingCart.addItemToCart(productItem);
// (2) [Item, Item]
// 0 : Item {id: 3, price: 31, amount: 4}
// 1 : Item {id: 4, price: 21, amount: 2}

productItem = {...product4, amount: 1};
shoppingCart.addItemToCart(productItem);
// (2) [Item, Item]
// 0 : Item {id: 3, price: 31, amount: 4}
// 1 : Item {id: 4, price: 21, amount: 3}

console.log(shoppingCart.totalAmount()) // 7
// (3 + 4)
console.log(shoppingCart.totalInCart()) // 200.09
// (31*4 + 21*3)*(1+0.07) + 0

shoppingCart.removeItemFromCart(3);
// (2) [Item, Item]
// 0 : Item {id: 3, price: 31, amount: 3}
// 1 : Item {id: 4, price: 21, amount: 3}

shoppingCart.removeItemFromCart(3);
// (2) [Item, Item]
// 0 : Item {id: 3, price: 31, amount: 2}
// 1 : Item {id: 4, price: 21, amount: 3}

shoppingCart.removeAllItemFromCart(4);
// [Item]
// 0 : Item {id: 3, price: 31, amount: 2}

shoppingCart.clearCart();
// []
// length: 0