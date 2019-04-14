// Study

// Function scope
/*
Variables declared inside a function cannot be accessed out him
Scope prevents the conflict in names
*/
function showCar() {
    var car = 'Opala'
    console.log(car)
}

showCar()
// console.log(car) // It's not possible, because car is a variable declared inside the function

// Function scope (father)
/*
Declared variables in the father scope can be accessed by the function
*/
var car = 'Mustang'
function showCar2() {
    var phrase = `My car is one ${car}`
    console.log(phrase)
}

showCar2() // 'My car is one Mustang'
console.log(car) // Mustang

// Const
/*
Maintains the scope in the block, prevents re-declaration and prevents modification of the value of the variable, avoiding bugs in the code
*/
const month = 'December'
// month = 'January' // error, tried modify the value
// const week // error, declared without a value

const date = {
    day: 28,
    month: 'December',
    year: 2019
}

date.day = 29 // works
// date = 'Janeiro' // error

// Let
/*
Maintains scope in block, prevents re-declaration, but allows modification of variable value
*/
let year
year = 2019
year++
console.log(year)

// let year = 2020 // error, re-declared a variable

// Exercices

// Why the following code returns with errors
{
    var color = 'Black'
    const mark = 'Fiat'
    let doors = 4
}
// console.log(var, mark, doors) // Because var is not a variable, its the definition

// How to fix the error below
function addTwo(x) {
    const two = 2
    return x + two
}

function splitTwo(x) {
    return x + two
}
console.log(addTwo(4))
// console.log(splitTwo(6)) // Because two was declared inside the 'addTwo' function

// What to do for the total return 500
var number = 50

for (let number = 0; number < 10; number++) {
    console.log(number)
}

const total = 10 * number
console.log(total) // Just modify in for 'var' to 'let'