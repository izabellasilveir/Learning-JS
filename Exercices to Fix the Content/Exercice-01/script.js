// Declare a variable called `myvar`, no value.
var myvar

// Once declared, assign the value 10 to the `myvar` variable.
myvar = 10

// Declare a new variable called `sum`, and add an instruction adding values ​​15 and 8.
var sum = 15 + 8

// Assign the `sum` variable its entire value by adding 1, using the abbreviated sum operator.
sum += 1

// Assign the sum variable to its entire value, multiplying by 3 using the abbreviated multiplication operator.
sum *= 3

// What is the value of the `sum` variable until here?
console.log(sum)

// Declare a variable called `iAmNinja`, giving it a Boolean value that represents` true`.
var iamNinja = true

// Declare a variable called `food` that receives an array with the values ​​'rice', 'beans' and 'egg'.
var food = ['Rice', 'Bean', 'Egg']

// Enter the statement that prints the 'bean' value, which is in the `food` variable.
console.log(food[1])

// Enter code that checks whether the `sum` variable is equal to `myvar` variable (also testing the type).
console.log(sum === myvar)

// Enter code that checks whether the `myvar` variable is less than or equal to the` sum` variable.
console.log(myvar <= sum)

// Create a function called `division 'that takes two numbers as a parameter, and returns the result of the division between them.
function division(num1, num2) {
    return num1 / num2
}

// Invoke the function created above, passing parameters 10 and 2.
console.log(division(10,2))