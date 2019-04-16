// Create a function that takes two arguments and returns the sum of the arguments.
function sum(num1, num2) {
    return num1 + num2
}

// Declare a variable that receives the invocation of the function created above, 
// passing any two numbers by argument, and adding `5` to the result returned from the function.
var plusFive = sum(5, 5) + 5

// What is the updated value of this variable?
console.log(plusFive)

// Declare a new variable, no value.
var newVariable

/*
Create a function that adds a value to the variable created above, and returns the string:
    The value of the variable is now VALUE.
    Where VALUE is the new value of the variable.  
*/
function addNewValue() {
    newVariable = 25
    return `The value of this variable now is ${newVariable}`
}

// Invoke the function created above.
addNewValue()

// What is the return of the function? (Use block comments).
console.log(addNewValue()) // The value of this variable nos is 25

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicationPlus(num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return 'Fill in all values ​​correctly'
    } else {
        var result = (num1 * num2 * num3) + 2
        return result
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicationPlus(1, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(multiplicationPlus(1, 2))
// 'Fill in all values correctly'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicationPlus(1, 2, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(multiplicationPlus(1, 2, 3))
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function awesomeFunction(num1, num2, num3) {
    if (num1 !== undefined && num2 === undefined && num3 === undefined) {
        return num1
    } else if (num1 !== undefined && num2 !== undefined && num3 === undefined) {
        return num1 + num2
    } else if (num1 !== undefined && num2 !== undefined && num3 !== undefined) {
        return (num1 + num2) / num3
    } else if (num1 === undefined && num2 === undefined && num3 === undefined) {
        return false
    } else {
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(awesomeFunction(1))
// 1
console.log(awesomeFunction(1, 1))
// 2
console.log(awesomeFunction(1, 1, 1))
// 2
console.log(awesomeFunction())
// false