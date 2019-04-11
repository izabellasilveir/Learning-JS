// Study

/*
var age = 19
console.log(age)

var goals = 1000
console.log(goals)

var pi = 3.14 // Pointer to decimal
console.log(pi) // Accuracy up to 15 digits, after that round  

var exp = 2e10 // 20000000000
console.log(exp)

var sum = 100 + 50 // 150
console.log(sum)

var subtraction = 100 - 50 // 50
console.log(subtraction)

var multiplication = 100 * 2 // 200
console.log(multiplication)

var division = 100 / 2 // 50
console.log(division)

var exponent = 2 ** 4 // 16
console.log(exponent)

var module = 14 % 5 // 4
console.log(module)

// Arithmetic Operators (String)

var sum = '100' + 50 // 10050
console.log(sum)

var subtraction = '100' - 50 // 50 | It's possible because is impossible subtract a string
console.log(subtraction)

var multiplication = '100' * '2' // 200
console.log(multiplication)

var division = 'Buy 10' / 2
console.log(division) // NaN

var testNaN = 'This is 100' / 2
console.log(isNaN(testNaN))

// NaN = Not a Number

var number = 80
var unity = 'Kg'
var weight = number + unity
console.log(weight)

var weightDivision = weight / 2
console.log(weightDivision) // NaN (Not a Number)

// Order matters

var total1 = 20 + 5 * 2 // 30
console.log(total1)

var total2 = (20 + 5) * 2 // 50
console.log(total2)

var total3 = 20 / 2 * 5 // 50
console.log(total3)

var total4 = 10 + 10 * 2 + 20 / 2 // 40
console.log(total4)

// Unary arithmetic operators

var increment = 5
console.log(increment++) // 5
console.log(increment) // 6

var increment2 = 5
console.log(++increment2) // 6
console.log(increment2)
// Same thing to decrement!

/* The '+' and '-' tries to transform the value in number */
/*
var phrase = 'This is a test'
+phrase // NaN
-phrase // NaN


var age = '19'
/* +age // 19 Number
-age // -19 Number */
/*
console.log(+age + 5) // 24

var doingCollege = true
console.log(+doingCollege) // 1
*/

// Exercices

// What is the result of the following expression
var total = 10 + 5 * 2 / 2 + 20 // 35
console.log(total)

// Create two expressions that return NaN
var expressionOne = 'Test' / 2
console.log(expressionOne)

var expressionTwo = 'Test' / 4
console.log(expressionTwo)

// Sum the string '200' with the number 50 and return 250
var numberString = '200'
var sum = +numberString + 50
console.log(sum)

// Increment the number 5 and return your value incremented
var number = 5
console.log(++number)

//How to divide the weight by 2
var number = '80'
var unity = 'kg'
var weight = number + unity
var weightByTwo = +number / 2
var weightDivide = weightByTwo + unity 
console.log(weightDivide)
