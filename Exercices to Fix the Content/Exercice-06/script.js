/*
Let's talk a little about "Football". Choose any state championship
to start the challenge.
Declare a variable called `championship` that will receive the name of the championship,
and print the name of that championship on the console.
*/
// ?
let championship = 'Cearense'
console.log(championship)

/*
Declare a variable named `teams`, which will receive an array with 5 elements.
The elements will be team names of the chosen championship, and the names
be in the order in which they appear in the table at the time of
challenge.
*/
// ?
let teams = ['Ceara', 'Fortaleza', 'Guarany', 'Floresta', 'Uniclinic']
for (let i = 0; i < teams.length; i++) {
    console.log('Teams that are participating in the championship:', teams[i]);
}

/*
Create a function called `showTeamPosition` with the following characteristics:
    - The function must receive one number per parameter;
    - The function should return the sentence:
    "The team that is in [POSITION] place is the [NAME OF TEAM].";
    - Where [POSITION] is the value passed by parameter and [TEAM NAME] is the time
    which is in this position in the array created above with the names of the teams.
    --------------
    Tip: remember that arrays start at zero index, so the last position
    should always be more than the index of the array;)
    --------------
    - The function should only return the above phrase only if the team is between
    the first 5.
    - If there is no team for the past position, you should return the message:
    "We do not have the information of the team that is in that position."
*/
// ?
function showTeamPosition(position) {
    if (position < 0 || position > 4) {
        return `We do not have the information of the team that is in that position.`
    }
    return `The team that is ${position+1}º place is ${teams[position]}`
}
console.log(showTeamPosition(0))

/*
Choose 4 teams from the selected league and show their position, using the
function above. Among those 4, add 1 that is not in the top 5.
*/
// ?
let i = 0
while (i <= teams.length) {
    console.log(showTeamPosition(i++))
}

/*
Show the numbers from 20 to 30 on the console (including the 30), using the
while.
*/
// ?
let number = 20
while (number <= 30) {
    console.log(number++)
}

/*
Create a function called `convertToHex`, with the following characteristics:
    - The function receives one color per parameter, of type string. Example: "red";
    - Choose 5 colors that will be converted from the color name to your
    hexadecimal equivalent (can be any tone);
    - Using the switch structure, make sure the color passed by parameter is
    some hexa chosen. If so, return the sentence:
    "The hexadecimal for color [COLOR] is [HEXADECIMAL].";
    - If the color passed by parameter is not selected, show
    the phrase:
    "We do not have the hexadecimal equivalent for [COLOR]."
*/
// ?
function convertToHex(color) {
    switch(color) {
        case 'Black':
            return `The hexadecimal for ${color} is '#000000'`
        case 'White':
            return `The hexadecimal for ${color} is '#FFFFFF'`
        case 'Green':
            return `The hexadecimal for ${color} is '#00FF00'`
        case 'Blue':
            return `The hexadecimal for ${color} is '#0000FF'`
        case 'Purple':
            return `The hexadecimal for ${color} is '#551A8B'`
        default:
            return `We don't have hexadecimal for ${color}`
    }
}

/*
Try to display the hexadecimal of 8 different colors using the function created above.
*/
// ?
console.log(convertToHex('Black'))
console.log(convertToHex('White'))
console.log(convertToHex('Green'))
console.log(convertToHex('Blue'))
console.log(convertToHex('Purple'))
console.log(convertToHex('Gray'))
console.log(convertToHex('Red'))
console.log(convertToHex('Yellow'))