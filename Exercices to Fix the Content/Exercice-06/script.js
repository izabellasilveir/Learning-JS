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
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?
let i = 0
while (i <= teams.length) {
    console.log(showTeamPosition(i++))
}

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?
let number = 20
while (number <= 30) {
    console.log(number++)
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
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
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
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