(function() {
    /*
    Create an IIFE that wraps around the code in that file. Make the
    correct code indentation, to stay within the IIFE.
    */

    /*
    Analyze the functions below (`myFunction`,` myFunction2` and `myFunction3`, and
    adjust the positioning of variables and internal functions, so that the codes
    within `console.log` that are returning` undefined` return the value
    variable or function called.
    */
    function myFunction() {
        var number1 = 10;
        var number2 = 20;
        console.log( 'In the `myFunction` function, the first number is', number1 );
        console.log( 'In the `myFunction` function, the second number is', number2 );
        return number1 + number2;
    }
    myFunction();

    /*
        myFunction2();
    */
    function myFunction2() {
        var number1 = 10;
        var number2 = 20;
        var sum = function sum() {
            return number1 + number2;
        };
        console.log( 'The sum of 10 and 20 equals', sum ? sum() : undefined );
        return sum();
    }
    myFunction2();

    /*
        myFunction3();
    */
    function myFunction3() {
        var number1 = 40;
        var number2 = 50;
        function sum() {
            return number1 + number2;
        };
        console.log( 'The sum of 40 and 50 equals', sum() );
        console.log( 'In the myFunction3 function, number1 is equal to', number1 );
        return sum();
    }
    myFunction3();

    /*
    In the previous challenge we created a calculator, using a functional structure.
    Now let's create another calculator, using another approach: D
    - Create a `calculator` function that receives two values ​​(numbers)
    per parameter.
    - This function must return another function, which receives a parameter
    called callback.
    - This `callback` will be a function, which we will pass by parameter when invoking
    the return of `calculator`.
    - The return of this second function must be the last callback function
    by parameter, INVOCATED, and passing it by parameter the two values
    which were passed to the first `calculator` function.
    */
    // ?
    function calculator(num1, num2) {
        return function(callback) {
            return callback(num1, num2)
        }
    }

    /*
    Declare a variable called `sum`, and assign it the` calculator` function,
    passing two numbers per parameter.
    */
    // ?
    var sum = calculator(1, 1)

    /*
    We know that `sum` now has a function assigned to it, which is the return of
    `calculator`. And this function expects a `callback` parameter. The 'callback'
    has two available parameters, which are the numbers you just passed
    for the call to the `calculator` above.
    - Show in the console the return of the invocation of `sum`, going through parameter
    an anonymous function that will return the sum of the two numbers that this function
    anonymous has as its arguments.
    */
    console.log( 'The result of the sum is:');
    // ?
    console.log(sum(function(num1, num2) {
        return num1 + num2
    }))

    /*
    Now declare another variable called `subtraction`,` multiplication`,
    `division` and` mod`, and assign them `calculator`, passing numbers
    for each call.
    */
    // ?
    var subtraction = calculator(2, 3)
    var multiplication = calculator(4, 5) 
    var division = calculator(6, 7)
    var mod = calculator(8, 9)

    /*
    Show the above variables in the `console` (one console call per variable),
    creating the callback function that makes the calculation for subtraction, multiplication,
    division and module (division remainder), depending on the function used.
    Your answers should be below the `console.log` for each
    call.
    */
    console.log( 'The result of the subtraction is:' );
    // ?
    console.log(subtraction(function(num1, num2){
        return num1 - num2
    }))

    console.log( 'The result of the multiplication is:' );
    // ?
    console.log(multiplication(function(num1, num2){
        return num1 * num2
    }))

    console.log( 'The result of division is:' );
    // ?
    console.log(division(function(num1, num2){
        return num1 / num2
    }))

    console.log( 'The result of mod is:' );
    // ?
    console.log(division(function(num1, num2){
        return num1 % num2
    }))
})()