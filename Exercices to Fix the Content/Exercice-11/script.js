(function() {
    // Involve the entire code of this file in an IIFE (including this comment).

    /*
    Create a variable named `once`, which gets` false` as its value.
    Create a loop that executes while this variable is true. Inside
    loop, show the console the message:
    'At least once!'
    What loop should you use for this message to be displayed on the console?
    */
    // ?
    var once = false
    do {
        console.log(`At least once!`)
    } while (once)

    /*
    Create an object called `person`, which receives the following properties:
    - 'name', 'age', 'weight' and 'birthday'. Fill in the correct values
    for the name, age, weight and date of birth of that person.
    */
    // ?
    person = {
        name: 'José Matela',
        age: 19,
        weight: 99,
        birthday: '19/05/1999'
    }

    /*
    Use a loop to traverse the object created above, showing in the console
    the phrase:
    'The [PROPERTY] of person is [VALUE]'
    Enjoy and create a `counter` variable that will count how many properties
    this object has.
    After the loop, show the phrase:
    'The person has [COUNTER] properties'
    */
    // ?
    let counter = 0
    for (const propertie in person) {
        console.log(`The ${propertie} of person is ${person[propertie]}`)
        counter++
    }
    console.log(`The person has ${counter} properties`)

    /*
    Create a function called `moreThan`, which will check if the person (object
    created above) is older than the age passed by parameter.
    If true, return `true`. Otherwise, return false.
    After the function, display the message in the console:
    'The person you have been more than 25 years old? [TRUE / FALSE] '
    */
    // ?
    function moreThan(age) {
        return person.age > age ? true : false
    }
    console.log(`The person has more than 25 years old?`, moreThan(25))

    /*
    Make a loop from 0 to 20, which adds each number as an item from a
    array called `numbers`. If the counter is greater than 10, exit the loop.
    Show the numbers in the array on the console.
    */
    console.log( 'From 0 to 10:' );
    // ?
    let numbers = []
    for (let i = 0; i < 20; i++) {
        if (i > 10) {
            break
        }
        numbers.push(i)
    }
    console.log(numbers)

    /*
    Make another loop from 0 to 20, which adds to an array called `numbers` (already
    created above, need only be restarted) numbers from 0 to 20 inclusive
    Those. If the number is odd, skip to the next number.
    Show the numbers in the array on the console.
    */
    console.log( 'Pairs from 0 to 20:' );
    // ?
    numbers = []
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 1) {
            continue
        }
        numbers.push(i)
    }
    console.log(numbers)
})()