// Study

// Everything is Object
/*
Strings, Numbers, Boolean, Objects and more, has properties and methods, so they are objects
*/
/*
var name = 'José'

name.length // 4
name.charAt(1) // 'o'
name.replace('sé', 'séi') // 'Joséi'
name // 'José'
name.toLowerCase() // 'josé'

// Numbers
var height = 1.75

height.toString() // '1.75'
height.toFixed() // 2

// Functions
function squareArea(side) {
    return side * side
}

squareArea.toString()
squareArea.length // Quantity of parameters we have

// DOM elements
/*
Practically all effects with JavaScript are done using properties and methods of DOM objects.
*/
/*
var btn = document.querySelector('.btn') // querySelector, use to add a tag inside the html, like a css selector, if class '.' if id '#'
btn.classList.add('blue') // add the blue class
btn.innerText // 'Click'
btn.addEventListener('click', function () {
    console.log('Clicked')
})


/*
Web API's are methods and properties that allow JavaScript and Browser interaction
*/

// Exercices

// Name 3 String properties or methods
var name = 'José'
name.toLowerCase()
name.toUpperCase()
name.replace('sé', 'séi')

// Name 5 DOM elements properties or methods
var btn = document.querySelector('.btn')
btn.addEventListener
btn.className
btn.innerHTML
btn.outerHTML
btn.id

// Search the web for an object (method) capable of interacting with the clipboard, clipboard is the part of your computer that handles Ctrl + C and Ctrl + V
function copyPaste() {
    var textCopied = document.getElementById("input") // Get the element has the 'input' id
    textCopied.select() // Select all the content in the 'input'
    document.execCommand("copy") // Execute the 'copy' command
    alert("Copied the text: " + textCopied.value) // Feedback for the user showing what he copied
  }