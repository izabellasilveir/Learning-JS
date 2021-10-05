// Study

// Array
/*
It is a group of generally related values. They serve to store different values ​​in a single variable
*/
/*
var videoGames = ['PS4', 'Xbox', 'Switch']
console.log(videoGames)
console.log(videoGames[0])
console.log(videoGames[1])
console.log(videoGames[2])

// Methos and properties of an array
/*
There are several other methods like, 'map', 'reduce', 'forEach' and more that we will see the front
*/
/*
console.log(videoGames.pop()) // Remove the last item and return him
console.log(videoGames) // Show how Array got after removing the last one
videoGames.push('3DS') // Add an elemente in array
console.log(videoGames) // Show how Array got after add the last one
console.log(videoGames.length)

// For loop
/*
For have 3 conditions 'start', 'condition', 'end'
*/
/*
console.log('For loop')
for (var number = 0; number < 10; number++) {
    console.log(number)
}

// While loop
console.log('While loop')
var i = 0
while (i < 10) {
    console.log(i)
    i++
}

// Arrays and loops
console.log('Show the names of videoGames')
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]) // Return the name all the videoGames array
}

// Break
/*
The loop stop if find the 'break' word
*/
/*
console.log('Using the break condition')
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
    if (videoGames[i] === 'PS4') {
        break
    }
}

// forEach
/*
forEach is a method that performs a function for each Array item. It is a simpler way to use an array loop
*/
/*
console.log('Using forEach')
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
videoGames.forEach(function(videoGame, index, array) { // Inside forEach pass a function
    console.log(videoGame, index, array)
})
*/

// Exercices

// Create a Array who contains the years that Brazil won the cup
var years = [1959, 1962, 1970, 1994, 2002, 2003]

// Interact with Array using a loop to show in console this message 'Brazil won the cup of ${year}'
years.forEach(function(year) {
    console.log(`Brazil won the cup of ${year}`)
}) 

// Interact with this loop and stop when it comes to 'Pear'
var fruits = ['Banana', 'Apple', 'Pear', 'Grape', 'Watermelon']
for (var i = 0; i < fruits.length; i ++) {
    console.log(fruits[i])
    if (fruits[i] === 'Pear') {
        break
    }
}


// Put the last fruit of this array inside a variable without remove him from array
for (var i = 0; i <= fruits.length; i++) {
    if (i === fruits.length) {
        var lastFruit = fruits[i - 1] // -1 because the length of this array is 5, and the indexes of string is 0 to 4
        console.log(lastFruit)
    }
}
