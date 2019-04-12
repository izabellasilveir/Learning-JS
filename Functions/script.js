// Study

/*
function squareArea(side) {
    return side * side
}

console.log(squareArea(4)) // 16
console.log(squareArea(5)) // 25
console.log(squareArea(2)) // 4

function pi() {
    return 3.14
}

var total = 5 * pi() // Parentheses execute a function
console.log(total)

// Parameters and arguments
/*
When CREATE a function, you can define PARAMETERS
When RUN a function, you can pass ARGUMENTS
*/
// weight and height are the parameters
/*
function bmi(weight, height) {
    var bmi = weight / (height * height)
    return bmi
}

console.log(bmi(99, 1.75)) // 99 and 1.75 are the arguments
console.log(bmi(45, 1.60)) // 45 and 1.60 are the arguments


// Parentheses execute a function
function favoriteColor(color) {
    if (color === 'Blue') {
        return 'You like sky'
    } else if (color === 'Green') {
        return 'You like grass'
    } else {
        return `You don't like colors`
    }
}

console.log(favoriteColor('Blue'))

// Arguments can be Functions
/*
The first parameter is the type o event was ocurred
The second parameter is the fuction is gonna be executed if the first parameter ocurred Callback
*/
/*
addEventListener('click', function() {
    console.log('Clicked')
})

// May or may not return a value

function bmi2(weight, height) {
    var bmi = weight / (height ** 2)
    console.log(bmi)
}

bmi2(50, 1.50) // return a bmi
console.log(bmi2(50, 1.50)) // return the bmi and undefined


// Returned values

function thirdAge(age) {
    if (typeof age !== 'number') {
        return 'Please, inform your age'
    } else if (age >= 60) {
        return true
    } else {
        return false
    }
}

console.log(thirdAge(60))

// Scope
/*
Variables declared inside the scope, cant not be used outside the scope
*/
/*
function needVisit(visitedCountries) {
    var totalCountries = 193
    return `Are still missing ${totalCountries - visitedCountries} countries`
}

//console.log(totalCountries) // Uncaught ReferenceError: totalCountries is not defined

// Lexic scope
/*
Function can be access variables will be created outside
*/

/*
var profission = 'Developer'

function data() {
    var name = 'José'
    var age = 19
    function otherData() {
        var address = 'Fortaleza'
        var age = 20
        return `${name}, ${age}, ${address}, ${profission}`
    }
    return otherData()
}

console.log(data()) // Return 'José , 20, Fortaleza, Developer'
//console.log(otherData()) // Return a error

// Hoisting
bmi3(99, 1.75)

function bmi3(weight, height) {
    var bmi = weight / (height ** 2)
    console.log(bmi)
}
*/

// Exercices

// Create a funcion to check if value is a Truthy
function isTruthy(value) {
    return !!value
}

// Create a mathematic function will return the perimeter of square (remember, perimeter is the sum of the 4 sides of square)
function perimeter(side) {
    return side * 4
}

// Create a function will return your complete name, this function must own: name and lastname
function completeName(name, lastName) {
    return `${name} ${lastName}`
}

// Create a function to check if number is pair
function isPair(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Create a function will return a type of data of the argument passed on it
function checkType(value) {
    return (typeof value)
}

// addEventListener is a native function of JavaScript, the first parameter is a event will ocurred and the second is a Callback, use this function to show in console your complete name when the 'click' event ocurred
addEventListener('click', function() {
    console.log('José Matela')
})

// Correct error below

function needVisit(visitedCountries) {
    var totalCountries = 193
    return `Are still missing ${totalCountries - visitedCountries} countries to visit`
}

function alreadyVisited(visitedCountries) {
    // The correction is below here
    // var totalCountries = 193
    return `Already visited ${visitedCountries} of ${totalCountries} countries visited`
}