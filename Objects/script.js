// Study

// Objects
/*
Set of variables and functions, which are called properties and methods
*/
/*
var person = {
    name: 'José',
    age: 19,
    profession: 'Developer',
    hasScholl: true
}

console.log(person.name) // 'José'
console.log(person.hasScholl) // 'true'


// Methods
/*
Is a property that has a function in place of its value
*/
/*
var square = {
    sides: 4,
    area: function(side) {
        return side * side
    },
    perimeter: function(side) {
        // this.sides references a 'sides' was declared in the top
        return this.sides * side
    } 
}

console.log(square.sides) // 4
console.log(square.area(5)) // 25
console.log(square.perimeter(5)) // 20
*/
/*
Abreviation of 'area: function () {}' to 'area() {}'
*/
/*
var square = {
    sides: 4,
    area(side) {
        return side * side
    },
    perimeter(side) {
        return this.sides * side
    }
}

console.log(square.area(5)) // 25
console.log(square.perimeter(5)) // 20

// Organize the code
/*
Objects will help you to organize your code in small reusable parts
*/
// Math is a native object of JavaScript
/*
console.log(Math.PI) // 3,14
console.log(Math.random()) // random number

var pi = Math.PI
console.log(pi) // 3,14

// Create a object
/*
A object has created when have the keys {}
*/
/*
var car = {}
var people = {}

console.log(typeof car) // 'object'

// Dot Notation Get
/*
Access properties of object using a '.'
*/
/*
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

var bg = menu.backgroundColor
console.log(bg)

// Dot Notation Set
/*
Change a value of propertie using '.' and '=' after his name
*/
/*
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

menu.backgroundColor = '#000'
console.log(menu.backgroundColor)

// Add propertie and methods
/*
Just add a new name and value
*/
/*
var menu = {
    width: 800
}

console.log('Before setting new values', menu)

menu.height = 50
menu.position = 'fixed'

console.log('After setting new values', menu)

// Keyword this
/*
this will make a reference to the object itself
*/
/*
var height = 120
var menu = {
    width: 800,
    height: 50,
    halfHeight() {
        return this.height / 2 // 50 / 2
    }
}

console.log(menu.halfHeight()) // without this, the value is 60

// Prototype and Heritage
/*
The object inherits properties and methods of object has used to create him
*/
/*
var menu = {
    width: 800
}

console.log(menu.hasOwnProperty('width')) // true
console.log(menu.hasOwnProperty('height')) // false
*/

// Exercices

// Create a object with your pessoal data, must have at least two properties first and last name
var informations = {
    name: 'José',
    lastName: 'Matela'
}

// Create a method in previous object, will show your complete name
informations.completeName = function() {
    return `${this.name} ${this.lastName}`
}

console.log(informations.completeName())

// Modify the value of property price for 3000
var car = {
    price: 1000,
    doors: 4,
    mark: 'Audi'
}
console.log('Old value', car.price)
car.price = 3000
console.log('New value', car.price)

// Create a Dog object will represent a Labrador preto, with 10 years old that bark when you see a man
var dog = {
    breed: 'Labrador',
    color: 'Black',
    age: 10,
    bark(pessoa) {
        if (pessoa === 'Man') {
            return 'Bark, bark'
        } else {
            return 'Move tail'
        }
    }
}

console.log(dog.bark('Man'))