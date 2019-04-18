/*
Create an array with 5 items.
*/
// ?
var myArray = [1, true, [1, 2], 1.5, {ball: 'blue'}]

/*
Create a function called `addItem`, which will add items to the created array.
The function should return the updated array.
*/
// ?
function addItem(item) {
    myArray.push(item)
    return myArray
}

/*
Add a new array to the array created at the beginning of the challenge, with at least 3
items of different types, showing the result on the console.
*/
// ?
console.log(addItem([false, 5, [1, 5]]))

/*
Show in the console the second element of this last array, created above, with the
phrase:
"The second element of the second array is [ELEMENT]."
*/
// ?
console.log(`The second element of second array is:`, myArray[5][1])

/*
Show in the console how many items have the first array created, with the phrase:
"The first array has [QUANTITY OF ITEMS] items."
*/
// ?
console.log(`The first array has ${myArray.length} items`)

/*
Now show in the console how many items have the second array created, with the phrase:
"The second array has [QUANTITY OF ITEMS] items."
*/
// ?
console.log(`The second array has ${myArray[5].length} items`)

/*
Using the `while` repeat structure, show all the numbers in the console
pairs between 10 and 20, including those 2.
*/
console.log('Pairs numbers between 10 and 20:');
// ?
let i = 10
while (i <= 20) {
    i % 2 === 0 ? console.log(i) : ''
    i++
}

/*
In the same idea as the above exercise: now show the odd numbers.
*/
console.log('Odd numbers between 10 and 20:');
// ?
i = 10 // Set i to 10 again, because hes exit the loop with value === 20
while (i <= 20) {
    i % 2 === 1 ? console.log(i) : ''
    i++
}

/*
Repeat the same exercises as above, but now using the "for" loop.
Just change the range:
- In the first "for", show the pairs numbers between 100 and 120, including them;
- In the second "for", show the odd numbers between 111 and 125, including them.
*/
console.log('Pairs numbers between 100 and 120:');
// ?
for (i = 100; i <= 120; i++) {
    i % 2 === 0 ? console.log(i) : ''
}

console.log('Odd numbers between 111 and 125:');
// ?
for (i = 111; i <= 125; i++) {
    i % 2 === 1 ? console.log(i) : ''
}