(function() {
    /*
    Create an IIFE that wraps around this file (including this comment),
    and make the correct indentation.
    */

    /*
    Without changing the codes in the `console.log` below, make the return
    them to be "true", using Wrapper Objects as "converters" in the values
    of variables. Review what is being printed on the console to learn how to
    solve the problem correctly.
    */
    var five = Number('5');
    console.log( five + ' is number?', typeof five === 'number' );

    var concat = String(10 + 10);
    console.log( '"' + concat + '" is a string? and equals "1010"?', typeof concat === 'string' );

    /*
    Going back to the example of the calculator, let's use one more approach
    functional, but this time, separating some responsibilities.
    - First, create an object called `operation` that will have the properties:
    '+', '-', '*', '/' and '%'.
    - Each property will receive a function (so they will be methods), and this
    function will receive two parameters and will return the operation
    using the values ​​passed by parameter.
    */
    // ?
    operation = {
        '+': function(num1, num2) {
            return num1 + num2
        },
        '-': function(num1, num2) {
            return num1 - num2
        },
        '*': function(num1, num2) {
            return num1 * num2
        },
        '/': function(num1, num2) {
            return num1 / num2
        },
        '%': function(num1, num2) {
            return num1 % num2
        }
    }
    //operation[operator](num1, num2)

    /*
    Create a function called `isOperatorValid`, which will receive an operator by
    parameter.
    - This function shall be responsible for verifying that the
    parameter is valid, that is, if it is equal to '+', '-', '*', '/', or
    '%'.
    - If it is equal to any of these, it should return "true".
    Otherwise, "false".
    - The challenge is to make the return without using "if" or "switch".
    */
    // ?
    function isOperatorValid(operator) {
        return operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%' ? true : false
    }

    /*
    Now let's create the calculator.
    - Create a function called `calculator`, which will
    operator;
    - If the operator is not valid, the function should return "false";
    - If the operator is valid, return a second function that will receive two
    parameters;
    - If any of the parameters is not a number, return "false";
    - Otherwise, return the method of the "operation" object created above, based on the
    operator to the "calculator" function, and switching to this method
    the two parameters of the "calculator" return function.
    */
    // ?
    function calculator(operator) {
        if (!(operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%')) {
            return false
        }
        return function(num1, num2) {
            if (typeof num1 !== 'number' || typeof num2 !== 'number') {
                return false
            }
            return operation[operator](num1, num2)
        }
    }

    /*
    Create a function called "showOperationMessage" that takes three parameters:
    - the operator, the first number and the second number. The function return
    should be the sentence:
    'Operation [NUMBER1] [OPERATOR] [NUMBER2] =';
    This function will show the operation message that we will create below.
    */
    // ?
    function showOperationMessage(operator, num1, num2) {
        return `Operation ${num1} ${operator} ${num2} = `
    }

    /*
    Create a function called "showErrorMessage" that receives a parameter:
    operator of the calculation operation, when the operation is not valid.
    This function should return the phrase:
    'Operation' [OPERATOR] 'not allowed!'
    */
    // ?
    function showErrorMessage(operator) {
        return `Operation "${operator}" not allowed!`
    }

    /*
    Our calculator is ready! Now let's test it:
    STEP 1:
    - Declare 3 variables: "number1" and "number2", starting with value zero, and
    "operationSignal", no value for now.
    */
    // ?
    let num1 = 0
    let num2 = 0
    let operationSignal

    /*
    STEP 2:
    Assign the sum operator to the operationSignal variable, and declare a
    variable called "sum", which receives the function "calculator", passing through
    parameter that received the operation signal.
    */
    // ?
    operationSignal = '+'
    var sum = calculator(operationSignal)

    /*
    STEP 3:
    "sum" is now a function, and if the correct signal was not passed to the
    function "calculator", "sum" will be false. Make sure that "sum" is not
    "false", and then assign the variables "number1" and "number2", two numbers
    which will be the operands of the sum operation.
    After that, show the result of the operation on the console, passing two
    parameters for the "log" method of "console":
    - The first will be the message of the operation (using the function created above);
    - The second, the sum function, passing the two operands.
    - If "sum" is "false", display the error message on the console.
    */
    // ?
    if (sum) {
        num1 = 5
        num2 = 2
        console.log(showOperationMessage(operationSignal, num1, num2), sum(num1, num2))
    } else {
        console.log(showErrorMessage(operationSignal))
    }

    /*
    Repeat from "STEP 2" with the operations of subtraction, multiplication,
    division and rest. Create variables with the names "subtraction",
    "multiplication", "division" and "mod".
    */
    // ?
    operationSignal = '-'
    var subtraction = calculator(operationSignal)
    if (subtraction) {
        num1 = 5
        num2 = 2
        console.log(showOperationMessage(operationSignal, num1, num2), subtraction(num1, num2))
    } else {
        console.log(showErrorMessage(operationSignal))
    }

    operationSignal = '*'
    var multiplication = calculator(operationSignal)
    if (multiplication) {
        num1 = 5
        num2 = 2
        console.log(showOperationMessage(operationSignal, num1, num2), multiplication(num1, num2))
    } else {
        console.log(showErrorMessage(operationSignal))
    }

    operationSignal = '/'
    var division = calculator(operationSignal)
    if (division) {
        num1 = 5
        num2 = 2
        console.log(showOperationMessage(operationSignal, num1, num2), division(num1, num2))
    } else {
        console.log(showErrorMessage(operationSignal))
    }

    operationSignal = '%'
    var mod = calculator(operationSignal)
    if (mod) {
        num1 = 5
        num2 = 2
        console.log(showOperationMessage(operationSignal, num1, num2), mod(num1, num2))
    } else {
        console.log(showErrorMessage(operationSignal))
    }

    /*
    Repeat STEP 2 again, but passing an invalid operator, to see if
    the error message will be displayed on the console.
    */
    // ?
    operationSignal = '['
    var invalid = calculator(operationSignal)
    if (invalid) {
        num1 = 5
        num2 = 2
        console.log(showOperationMessage(operationSignal, num1, num2), invalid(num1, num2))
    } else {
        console.log(showErrorMessage(operationSignal))
    }
})()