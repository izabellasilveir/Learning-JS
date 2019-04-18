// Study 
/*
function myFunction() {
    return [1, 2, 3]
}

myFunction()[0] // 1

function myFunction() {
    return {
        prop1: 1,
        prop2: 'José',
        prop3: function() {
            return 'prop3'
        }
    }
}

myFunction()
/*
{
    prop1: 1,
    prop2: 'José',
    prop:3 [Function]
}
*/
/*
myFunction().prop1 // 1

var arr = [1, 2, 3]

function myFunction(arg) {
    return arg
}

myFunction() // undefined

myFunction(arr) // [1, 2, 3]

function myFunction2(arg) {
    return arg[1]
}

myFunction2(arr) // 2

myFunction2([1, 5, 7, 8]) // 5

myFunction(['José', 1, true, 34])
/*
{
    'José',
    1,
    true,
    34
}
*/
/*
var obj = {
    propriedade: 'José',
    curso: 'JS',
    human: true
}

function myFunction(arg) {
    return arg
}

myFunction(1) // 1

myFunction(obj)
/*
{
    propriedade: 'José',
    curso: 'JS',
    human: true
}
*/
/*
myFunction(obj.propriedade) // 'José'


myFunction(obj.human) // true

function myFunction2(arg) {
    return arg.curso
}

myFunction2(obj) // 'JS'
*/
/*
Create any variable, which receives an array with some random values
- at least 5 - (the array values ​​are on your own).
*/
let myArray = [1, 'José', true, false, 2]

/*
Create a function that receives an array as a parameter, and return that array.
*/
function returnArray(arg) {
    return arg
}

/*
Print the second index of the array returned by the function created above.
*/
console.log(returnArray(myArray)[1])

/*
Create a function that takes two parameters: the first, an array of values; it's the
second, a number. The function should return the value of an array index that was passed
in the first parameter. The index used to return the value must be the number passed in the
second parameter.
*/
// ?
function arrayIndex(arr, index) {
    return arr[index]
}

/*

Declare a variable that receives an array of 5 values, of different types.
*/
// ?
let receive = ['JS', 19, true, false, [1, 'José', 777.7]]

/*
Invoke the function created above, making it return all the values ​​of the last
array created.
*/
// ?
for (let i = 0; i < receive.length; i++) {
    console.log(arrayIndex(receive, i))
}

/*
Create a function called `book`, which receives a parameter, which will be the name of the
book. Within this function, declare a variable that receives an object with the
following characteristics:
- this object will receive 3 properties, which will be names of books;
- each of these properties will be a new object, which will have other 3
properties:
    - `pages' - Number (number of pages)
    - `author` - String
    - `company` - String
- The function must return the object referring to the book passed by parameter.
- If the parameter is not passed, the function must return the object with all
the books.
*/
// ?
function book(name) {
    let books = {
        'JavaScript': {
            pages: 250,
            author: 'José',
            company: 'Nagalli'
        },
        'Java': {
            pages: 300,
            author: 'Matela',
            company: 'Cello'
        },
        'Node': {
            pages: 350,
            author: 'Neto',
            company: 'RichFreak'
        }
    }
    return !name ? books : books[name]
}

/*
Using the function created above, print the object with all the books.
*/
// ?
console.log(book())

/*
Still with the function above, print the number of pages of any book,
using the phrase:
"The [BOOKNAME] book has [X] pages!"
*/
// ?
let bookName = 'JavaScript'
console.log(`The book ${bookName} has ${book(bookName).pages} pages`)

/*
Still with the above function, print the name of the author of any book, using
the phrase:
"The author of [BOOKNAME] is [AUTHOR]."
*/
// ?
console.log(`The author of ${bookName} is ${book(bookName).author}`)

/*
Still with the above function, print the name of the publisher of any book, using
the phrase:
"The [BOOKNAME] book has been published by the [COMPANYNAME] publisher."
*/
// ?
console.log(`The book ${bookName} was published by ${book(bookName).publishingCompany} company`)