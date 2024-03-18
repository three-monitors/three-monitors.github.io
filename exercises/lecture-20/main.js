// 1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
const person = {
    name: "Tom Cat",
    age: 11,
};
console.dir(person); // Object
// console.log(person); // {name: 'Tom Cat', age: 11}
console.log(
    person.name,
    person.age
);
// Tom Cat 11

// 2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
const person2 = {
    name: {
        firstName: "Tom",
        lastName: "Cat",
    },
    age: 22,
};
console.dir(person2); // Object
// console.dir(Object.keys(person2)); // Array(2)
// console.dir(Object.values(person2)); // Array(2)
// console.dir(Object.entries(person2)); // Array(2)
// console.log(person2); // {name: {…}, age: 22}
console.log(
    person2.name.firstName,
    person2.name.lastName,
    person2.age
);
// Tom Cat 22

// 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
const person3 = {
    firstName: "Tom",
    lastName: "Cat",
    age: 33,    
    bio() {
        return `
        <li class="mb-2"><span>This is ${this.firstName} ${this.lastName}, ${this.age} year(s)</span></li>
        `;
    }
};
console.log(person3.bio()); // <li class="mb-2"><span>This is Tom Cat, 33 year(s)</span></li>
// console.log(
//     person3.firstName,
//     person3.lastName,
//     person3.age
// );
// Tom Cat 33
const person4 = {
    firstName: "Tom",
    lastName: "Cat",
    age: 33,    
    bio() {
        return `
        This is ${this.firstName} ${this.lastName}, ${this.age} year(s)
        `;
    }
};
console.log(person4.bio()); // This is Tom Cat, 33 year(s)

// 4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
const person5 = {
    firstName: "Tom",
    introduceSelf() {
        return `
        <li class="mb-2"><span>Hi! I'm ${this.firstName}</span></li>
        `;
    },
};
console.log(person5.introduceSelf()); // <li class="mb-2"><span>Hi! I'm Tom</span></li>

const person6 = {
    firstName: "Tom",
    introduceSelf() {
        return `
        Hi! I'm ${this.firstName}
        `;
    },
};
console.log(person6.introduceSelf()); // Hi! I'm Tom
// console.log(
//     "Hi! I'm",
//     person6.firstName
// );
// Hi! I'm Tom
// -----------------------------------------------
// 5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.
function createPerson(name) {
    const obj = {};
    obj.id = 1;
    obj.name = name;
    introduceSelf = function () {
        console.log(this.obj.id, this.obj.name);
    };
};
const person7 = createPerson(7, 'Name 1');
const person8 = createPerson(8, 'Name 2');
// console.dir(person7); // Object
// console.dir(person8); // Object
// console.dir(Object.keys(person7)); // Array(2)
// console.dir(Object.values(person7)); // Array(2)
// console.dir(Object.entries(person7)); // Array(2)
// console.log(person7); // {id: 1, name: 1}
// console.dir(Object.keys(person8)); // Array(2)
// console.dir(Object.values(person8)); // Array(2)
// console.dir(Object.entries(person8)); // Array(2)
// console.log(person8); // {id: 1, name: 2}

// 6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function Person(id, name) {
    this.id = id;
    this.name = name;
    this.introduceSelf = function () {
        console.log(this.id, this.name);
      };
}

const mary = new Person(9, 'mary'); // 9 'mary'
const tom = new Person(10, 'tom'); // 10 'tom'

console.log(mary); // Person {id: 9, name: 'mary', introduceSelf: ƒ}
console.log(tom); // Person {id: 10, name: 'tom', introduceSelf: ƒ}

// - визначити, чи містить об'єкт mary властивість під назвою prop.
console.log(Person.hasOwnProperty('prop')); // false

// 7. Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.
// ingredients:
//     6 fluid ounces gin
//     1 dash dry vermouth
//     1 fluid ounce brine from olive jar
//     4 stuffed green olives
// fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів). Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу excuse_my_french(), на консоль виводиться:
// ingrédients:  
//     170.4786 ml de gin
//     1 trait de vermouth sec (0.0351951ml) 
//     28.4131 ml de saumure du pot d'olive
//     4 olives vertes farcies

// При виклику методу english_please(), на консоль виводиться:
// ingredients:
//     6 fluid ounces gin
//     1 dash dry vermouth (0.0351951ml) 
//     1 fluid ounce brine from olive jar
//     4 stuffed green olives
const DirtyMartini = {
    english_please() {
        return `
            ingrédients:
                6 fluid ounces gin
                1 dash dry vermouth (0.0351951ml)
                1 fluid ounce brine from olive jar
                4 stuffed green olives
        `;
    },
    excuse_my_french() {
        return `
            ingrédients:
                170.4786 ml de gin
                1 trait de vermouth sec (0.0351951ml)
                28.4131 ml de saumure du pot d'olive
                4 olives vertes farcies
        `;
    },
};
console.log(DirtyMartini.english_please()); // ingrédients:
                                            //      6 fluid ounces gin
                                            //      1 dash dry vermouth (0.0351951ml)
                                            //      1 fluid ounce brine from olive jar
                                            //      4 stuffed green olives
console.log(DirtyMartini.excuse_my_french()); // ingrédients:
                                              //    170.4786 ml de gin
                                              //    1 trait de vermouth sec (0.0351951ml)
                                              //    28.4131 ml de saumure du pot d'olive
                                              //    4 olives vertes farcies