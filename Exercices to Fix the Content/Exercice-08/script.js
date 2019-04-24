/*
Declare a variable called `sum` and assign it a function called
`calculateSum`. The function must receive two parameters and return the sum
these parameters.
*/
// ?
var sum = function calculateSum(num1, num2) {
    return num1 + num2
}

/*
Invoke the created function above, passing two numbers that will be added, and show
the result in the console, with the phrase:
"The sum of [VALUE 1] and [VALUE2] equals [RESULT]."
*/
// ?
let num1 = 1
let num2 = 2
console.log(`The sum of ${num1} and ${num2} equals ${sum(num1, num2)}`)

/*
Show in the console the name of the function created above, with the phrase:
"The name of the function that makes the sum is [FUNCTION NAME]."
*/
// ?
console.log(`The name of the function that makes the sum is ${sum.name}`)

/*
Create a literal function called `showName`. This function should return the
your name.
*/
// ?
function showName() {
    return 'José Matela'
}

/*
Declare a variable named `varShowName` that receives the function created above.
*/
// ?
var varShowName = showName

/*
Using the variable created above, show in the console the name and return of the function
assigned to it, with the following sentence:
"The [FUNCTION NAME] function returns [FUNCTION RETURN]."
*/
// ?
console.log(`The ${varShowName.name} function returns ${varShowName()}`)

/*
Create a literal function called `calculator` that works like this:
- The function must receive a parameter that will tell what mathematical operation it
will effect. It will be a string with the values ​​`+`, `-`,` * `,` / `or`% `;
- This function should return a second function that will do the following:
  - This second function must receive two parameters;
  - These two parameters will be the operands used in the mathematical operation;
  - The return of this second function is the complete mathematical operation, with the phrase:
  "Result of the operation: [NUMBER1] [OPERATOR] [NUMBER2] = [RESULT]."
  - If the operator is not valid, return the sentence:
  "Invalid operation."
*/
// ?
function calculator(operation) {
    return function calculate(num1, num2) {
        let result
        switch (operation) {
            case '+':
                result = num1 + num2
                break
            case '-':
                result = num1 - num2
                break
            case '*':
                result = num1 * num2
                break
            case '/':
                result = num1 / num2
                break
            case '%':
                result = num1 % num2
                break
            default:
                return `Invalid operation`
        }
        return `Resultado da operação: ${num1} ${operation} ${num2} = ${result}`
    }
}

/*
Declare a variable called `sum`, which will receive the above function, passing as
parameter the sum operator.
*/
// ?
var sum = calculator('+')

/*
Now `sum` is a function. Show on the console the sum of two numbers, using it.
*/
// ?
console.log(sum(2, 2))

/*
Now, declare some variables with the names `subtraction`,` multiplication`,
`division` and` mod`, and assign them the function `calculator`, passing the operator
per parameter for each of them.
*/
// ?
var subtraction = calculator('-')
var multiplication = calculator('*')
var division = calculator('/')
var mod = calculator('%')

/*
Perform an operation with each of the functions created above, showing the result
on the console.
*/
// ?
console.log(subtraction(2, 2))
console.log(multiplication(2, 2))
console.log(division(2, 2))
console.log(mod(2, 2))