// Study

// Assignment operators
/*
Can be used abbreviated forms
*/
/*
var x = 5
var y = 10
console.log(x += y) // 15
console.log(x -= y) // -5
console.log(x *= y) // 50
console.log(x /= y) // 0.5
console.log(x %= y) // 0
console.log(x **= y) // (9765625)

// Ternary operator
/*
Abreviation of condition if/else
Usually used when we need to assign a value to a variable, depending on a condition
*/
/*
var age = 19
var allowDrink = (age >= 18) ? 'Yes, cheers' : 'No, get out' // condition ? true : false
console.log(allowDrink)

// Abbreviated if
/*
It is not necessary open/close the keys '{}' when returns only one code line
*/
/*
var hasScholl = true
if (hasScholl)
    console.log('Has scholl')
else
    console.log('Dont has scholl')
*/

// Exercices

// Sum 500 to the scroll value bellow attributing the new value to scroll
var scroll = 1000
scroll += 500
console.log(scroll)

// Attribute true for giveCredit variable if client has car and house, and false otherwise
var hasCar = true
var hasHouse = true
var giveCredit = (hasCar && hasHouse) ? 'Give credit for him' : 'Do not give credit for him'
console.log(giveCredit)