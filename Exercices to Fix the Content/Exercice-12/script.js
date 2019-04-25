(function() {/*
    Wrap the entire contents of this file in an IIFE.
    */

    /*
    Create an object called `person`, with the properties:
        `name`: String
        `lastname`: String
        `age`: Number
    Fill each property with your personal data, respecting the type
    of value for each property.
    */
    // ?
    person = {
        name: 'José',
        lastName: 'Matela',
        age: 19
    }

    console.log( 'Properties of "person":' );
    /*
    Show in the console, in an array, all the properties of the object above.
    Do not use any repeat structures, nor create the array manually.
    */
    // ?
    console.log(Object.keys(person))

    /*
    Create an empty array called `books`.
    */
    // ?
    let books = []

    /*
    Add in this array 3 objects, which will be 3 books. Each book must have the
    following properties:
    `name`: String
    `pages`: Number
    */
    // ?
    books.push({name: 'JS', pages: 100})
    books.push({name: 'Java', pages: 200})
    books.push({name: 'Swift', pages: 300})

    console.log( '\nList of books:' );

    /*
    Show all the books on the console.
    */
    // ?
    console.log(books)

    console.log( '\nBook being removed:' );
    /*
    Remove the last book, and show it on the console.
    */
    // ?
    let removed = books.pop()
    console.log(removed)

    console.log( '\nNow there are only the books left:' );
    /*
    Show the remaining books on the console.
    */
    // ?
    console.log(books)

    /*
    Convert the objects that were in `books` to strings.
    */
    // ?
    books = JSON.stringify(books)
    console.log( '\nBooks in string format:' );

    /*
    Show the books in this format on the console:
    */
    // ?
    console.log(books)

    /*
    Convert the books back to the object.
    */
    // ?
    books = JSON.parse(books)
    console.log( '\nBooks are now objects again:' );

    /*
    Show in the console all the properties and values ​​of all the books,
    in the format below:
        "[PROPERTY]: [VALUE]"
    */
    // ?
    for (const property in books) {
        console.log(property, books[property])
    }

    /*
    Create an array called `myName`. Each item in this array must be a
    your name. Add your full name to the array.
    */
    // ?
    console.log( '\nMy name is:' );
    var myName = ['M', 'a', 't', 'e', 'l', 'a']

    /*
    Putting together all the items in the array, show the console its name.
    */
    // ?
    console.log(myName.join(''))

    console.log( '\nMy name reversed is:' );

    /*
    Still using the object above, show the inverted name on the console.
    */
    // ?
    console.log(myName.reverse().join(''))

    console.log( '\nNow in alphabetical order:' );
    /*
    Show all the items in the array above, sorted alphabetically.
    */
    // ?
    console.log(myName.sort())
})()