// STEP 1
// function Cat() {
//         console.log('Cat class has been created.');
//     }
// class Dog {
//     constructor () {
//         console.log('Dog class has been created.');
//     }
// }

// // STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created.');
//     }
// }
// const animal1 = new Animal();

// STEP 4
// class Animal {
//     constructor(breed) {
//         this.breed = breed;
//         console.log(`The ${this.breed} has been created.`);
//     }
// }
// const animal1 = new Animal('rabbit');

// STEP 5
// class Animal {
//     constructor(breed, color, height, length) {
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         console.log(`The ${this.breed} is ${this.color} and is ${this.height} and ${this.length} long.`);
//     }
// }
// const animal1 = new Animal('rabbit','brown','10 inch','20 inches');

// STEP 6
// class Animal {
//     constructor() {
//         for (const animal1s in animal1) {
//             return animal1s;
//         }
//     }
// }
//     const animal1 = new Animal('rabbit','Holland Lop','brown','10 inch','20 inches');

// STEP 7
// class Animal {
//     constructor(type, color) {
//         this._color = color;
//         this._type = type;
//     }
//     create = function() {
//         console.log(`The ${this._color} ${this._type} has been created.`);
//     }
//     speak = function(animal) {
//         console.log(`The ${this._color} ${(animal===0 ? 'dog is barking' : 'cat is meowing.')}`);
//     }
// }
// class Cat extends Animal {
// constructor(_type, _color) {
//     super(_type, _color);
//     }
// }
// class Dog extends Animal {
//     constructor(_type, _color) {
//         super(_type, _color);
//     }
// }
// const dog1 = new Dog('dog','brown');
// dog1.create();
// dog1.speak(0);
// const cat1 = new Cat('cat', 'black n white');
// cat1.create();
// cat1.speak(1);

// STEP 8
// function Animal(type) {
//     let _type = type;
//     let checkType = function() {
//         console.log(`The ${type} is making noise!`);   
//     }
//     this.showTypeOfAnimal = function() {
//         checkType();
//     }
// }
// const maki = new Animal('tiger');
// maki.showTypeOfAnimal();

// STEP 9