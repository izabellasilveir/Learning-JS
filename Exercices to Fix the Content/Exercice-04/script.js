/*
Declare a variable called `isTruthy`, and assign it a function that receives
a single parameter as an argument. This function should return `true` if the
Boolean equivalent to the value passed in the argument is `true`, or` false`
to the contrary.
*/
let isTruthy = function(something) {
    return !!something
}

// Invoke the function created above by passing all kinds of `falsy` values.
console.log(`Falsy's`)
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(NaN))

/*
Invoke the function created above passing as parameter 10 `truthy` values.
*/
console.log(`Truthy's`)
console.log(isTruthy(1))
console.log(isTruthy(' '))
console.log(isTruthy('José'))
console.log(isTruthy({}))
console.log(isTruthy([]))
console.log(isTruthy(function() {}))
console.log(isTruthy(20 * 30))
console.log(isTruthy([1, 2, 3]))
console.log(isTruthy({a : 1, b : 2}))

/*
Declare a variable called `car`, giving it an object with the
properties (values ​​must be of the type shown below):
- `mark` - String
- `model` - String
- `board` - String
- `year` - Number
- `color` - String
- `doors` - Number
- `seats` - Number - cinco por padrão
- `quantityPeople` - Number - zero por padrão
*/
let car = {
    mark: 'Toyota',
    model: 'Corolla',
    board: 'BRO-777',
    year: 2019,
    color: 'Black',
    doors: 4,
    seats: 5,
    quantityPeople: 0
}

/*
Create a method called `changeColor` that changes the color of the car according to the color
passed by parameter.
*/
car.setColor = function(color) {
    this.color = color
}

/*
Create a method called `getColor`, which returns the color of the car.
*/
car.getColor = function() {
    return this.color
}

/*
Create a method called `getModel` that returns the car model.
*/
car.getModel = function() {
    return this.model
}

/*
Create a method called `getMark` that returns the car brand.
*/
car.getMark = function() {
    return this.mark
}

/*
Create a method called `getMarkModel`, which returns:
"This car is a [MARK] [MODEL]"
To return the make and model values, use the created methods.
*/
car.getMarkModel = function() {
    return `This car is a ${this.mark} ${this.model}`
}

/*
Create a method that will add people in the car. This method will
following characteristics:
- It should receive by parameter how many people will enter the car. That
number does not need to fill the car, you can add people to the
few.
- The method should return the phrase: "We already have [X] people in the car!"
- If the car is already full, with all the seats already filled, the
should return the sentence: "The car is already full!"
- If there are still places in the car, but the number of people
parameter is to exceed the car seat limit, then you should
show how many seats can still be occupied, with the phrase:
"Only people [fit] can fit!"
- If there is only one other person, show the word "person" in return
quoted above, instead of "people."
*/
car.addPeople = function(people) {
    let totalPeople = this.quantityPeople + people
    if (this.quantityPeople === this.seats && totalPeople >= this.seats) {
        return 'The car is full'
    }

    if (totalPeople > this.seats) {
        let fit = this.seats - this.quantityPeople
        let pluralOrSingular = fit === 1 ? 'people' : 'peoples'
        return `Only fit ${fit} more ${pluralOrSingular} in the car!`
    }
    this.quantityPeople += people
    return `We have ${this.quantityPeople} peoples in this car`
}

/*
Now let's check some information from the car. For the answers below,
always use the invocation format of the method (or call the property),
adding _inline_ comments to the side with the value returned, if the method
return some value.

Qual a cor atual do carro?
*/
console.log(car.getColor()) // 'Black'

// Mude a cor do carro para vermelho.
car.setColor('Red')

// E agora, qual a cor do carro?
console.log(car.getColor()) // Red

// Mude a cor do carro para verde musgo.
car.setColor('Moss Green')

// E agora, qual a cor do carro?
console.log(car.getColor()) // Moss Green

// Qual a marca e modelo do carro?
console.log(car.getMarkModel()) // This car is a Toyota Corolla

// Adicione 2 pessoas no carro.
console.log(car.addPeople(2)) // We have 2 peoples in the car

// Adicione mais 4 pessoas no carro.
console.log(car.addPeople(4)) // Only fit 3 more peoples in the car

// Faça o carro encher.
console.log(car.addPeople(3)) // We have 5 peoples in the car

// Tire 4 pessoas do carro.
console.log(car.addPeople(-4)) // We have 1 people in the car

// Adicione 10 pessoas no carro.
console.log(car.addPeople(10)) // Only fit 4 more peoples in the car

// Quantas pessoas temos no carro?
console.log(car.quantityPeople) // 1