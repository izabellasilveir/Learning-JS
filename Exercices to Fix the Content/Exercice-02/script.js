// Create a function that takes two arguments and returns the sum of the arguments.
function sum(num1, num2) {
    return num1 + num2
}

// Declare a variable that receives the invocation of the function created above, 
// passing any two numbers by argument, and adding `5` to the result returned from the function.
var plusFive = sum(5, 5) + 5

// What is the updated value of this variable?
console.log(plusFive)

// Declare a new variable, no value.
var newVariable

/*
Create a function that adds a value to the variable created above, and returns the string:
    The value of the variable is now VALUE.
    Where VALUE is the new value of the variable.  
*/
function addNewValue() {
    newVariable = 25
    return `The value of this variable now is ${newVariable}`
}

// Invoke the function created above.
addNewValue()

// What is the return of the function? (Use block comments).
console.log(addNewValue()) // The value of this variable nos is 25

/*
Create a function with the following characteristics:
1. The function must receive 3 arguments;
2. If any of the three arguments are not filled in, the function should return the string:
    Fill in all values ​​correctly!
3. The return of the function must be the multiplication of the 3 arguments, adding `2` to the multiplication result.
*/
function multiplicationPlus(num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return 'Fill in all values ​​correctly'
    } else {
        var result = (num1 * num2 * num3) + 2
        return result
    }
}

// Invoke the function created above, passing only two numbers as an argument.
multiplicationPlus(1, 2)

// What is the result of the above invocation? (Use comments to show the value returned)
console.log(multiplicationPlus(1, 2)) // 'Fill in all values correctly'

// Now invoke the function created above, but pass all three arguments required.
multiplicationPlus(1, 2, 3)

// What is the result of the above invocation? (Use comments to show the value returned)
console.log(multiplicationPlus(1, 2, 3)) // 8

/*
Create a function with the following characteristics:
1. The function must receive 3 arguments.
2. If only one argument is passed, return the value of the argument.
3. If two arguments are passed, return the sum of the two arguments.
4. If all arguments are passed, return the sum of the first with the second, and the result, divided by the third.
5. If no argument is passed, return the boolean value `false`.
6. Also, if none of the above conditions are met, return `null`.
*/
function awesomeFunction(num1, num2, num3) {
    if (num1 !== undefined && num2 === undefined && num3 === undefined) {
        return num1
    } else if (num1 !== undefined && num2 !== undefined && num3 === undefined) {
        return num1 + num2
    } else if (num1 !== undefined && num2 !== undefined && num3 !== undefined) {
        return (num1 + num2) / num3
    } else if (num1 === undefined && num2 === undefined && num3 === undefined) {
        return false
    } else {
        return null
    }
}

// Invoke the above function using all possibilities (with no arguments, with one, two, and three.) 
// Put a line comment next to the function with the result of each invocation.
console.log(awesomeFunction(1))
// 1
console.log(awesomeFunction(1, 1))
// 2
console.log(awesomeFunction(1, 1, 1))
// 2
console.log(awesomeFunction())
// false