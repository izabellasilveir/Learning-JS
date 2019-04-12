// Study

/*
// Boolean
var hasSchool = true
console.log(hasSchool)

var hasCollege = false
console.log(hasCollege)

// If & Else Conditions
var hasSchool = true

if (hasSchool) {
    console.log('Has School')
} else {
    console.log('Dont has School')
}


// Else If Conditions
var hasSchool = true
var hasCollege = false

if (hasCollege) {
    console.log('Has College and School')
} else if (hasSchool) {
    console.log('Has School, but dont has College')
} else {
    console.log('Dont has School')
}

// Truthy & Falsy
/* This values always is gonna be False
if (false)
if (0)
if (NaN)
if (null)
if (undefined)
if ('') // or "" or ``
*/

/* This values always is gonna be true
if (true)
if (1)
if (' ')
if ('José')
if (-5)
if ({}) // This is Object = True
*/

// Logical negation operator
/*
if (!true) // false
if (!1) // false
if (!'') // true
if (!undefined) // true
if (!!' ') // true
if (!!true) // false
*/

// Comparison Operators
/*
10 > 5 // true
5 > 10 // false
20 < 10 // false
10 <= 10 // true
10 >= 11 // false
*/

// == } Make a comparison not so strict
// === } Make a strict comparison, that is, the DATA TYPE should be THE SAME when we use
/*
10 == '10' // true
10 == 10 // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
*/

// Logic Operators
/* Always return the first false value
true && true // true
true && false // false | first false value that he finds, gonna be return false
false && true // false
'Cat' && 'Dog' // 'Dog' // if the 2 values is true, he gonna be return the last
(5 - 5) && (5 + 5) // 0 | because 0 is a false number, and is the first
'Gato' && false // false
(5 >= 5) && (3 < 6) // true
*/

/* Always return the first true value
true || true // true
true || false // true
false || true // true
'Cat' || 'Dog' // 'Cat'
(5 - 5) || (5 + 5) // 10
'Cat' || false // Cat
(5 >= 5) || (3 < 6) // true
*/

// Switch
/*
var favoriteColor = 'Blue'

switch (favoriteColor) {
    case 'Blue':
    console.log('Look to the sky.')
    break

    case 'Red':
    console.log('Look to the roses.')
    break

    case 'Yellow':
    console.log('Look to the sun.')
    break

    default:
    console.log('Close your eyes.')
}
*/

// Exercices

// Check if your age is greater than that of a parent, depending on the result put in the console 'It's bigger, 'It's equal' or 'It's small'
var myAge = 19
var parent = 45

if (myAge > parent) {
    console.log(`It's bigger`)
} else if (myAge < parent) {
    console.log(`It's small`)
} else {
    console.log(`It's equal`)
}

// What the value will be returned in this expression
var expression = (5 - 2) && (5 - ' ') && (5 - 2) // 3
console.log(expression)

// Check if this variables is Truthy or Falsy
var name = 'José' // Truthy
var age = 19 // Truthy
var hasCollege = false // Falsy
var futureWork // Falsy
var accountMoney = 0 // Falsy
console.log(!!name, !!age, !!hasCollege, !!futureWork, !!accountMoney)

// Compare the total of habitants of Brazil with China
var brazil = 207
var china = 1340

if (brazil > china) {
    console.log(`Brazil it's bigger`)
} else if (brazil < china) {
    console.log(`Brazil it's small`)
} else {
    console.log(`This countries is equal`)
}

// What is gonna be show in console?
if (('Cat' === 'cat') && (5 > 2)) {
    console.log('True')
} else {
    console.log('False') // This
}

// What is gonna be show in console?
if (('Cat' === 'cat') || (5 > 2)) {
    console.log('Cat' && 'Dog') // This
} else {
    console.log('False')
}