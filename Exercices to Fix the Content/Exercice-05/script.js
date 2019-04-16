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
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [1, 'José', true, false, 2]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arg) {
    return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myArray)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function arrayIndex(arr, index) {
    return arr[index]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
let receive = ['JS', 19, true, false, [1, 'José', 777]]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
for (let i = 0; i < receive.length; i++) {
    console.log(arrayIndex(receive, i))
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
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
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
let bookName = 'JavaScript'
console.log(`The book ${bookName} have ${book(bookName).pages} pages`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`The author of ${bookName} is ${book(bookName).author}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`The book ${bookName} was published by ${book(bookName).publishingCompany} company`)