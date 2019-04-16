// Declare any variable, which receives an empty object.
var something = {}

/*
Declare a `person` variable that receives your personal information.
The properties and value types for each property of this object must be:
- `firstName` - String
- `lastName` - String
- `sex` - String
- `age` - Number
- `height` - Number
- `wheight` - Number
- `walking` - Boolean - receives "false" by default
- `walked` - Number - receives "zero" by default
*/
let person = {
    firstName: 'José',
    lastName: 'Matela',
    sex: 'Man',
    age: 19,
    height: 1.75,
    wheight: 99,
    walking: false,
    walked: 0
}


/*
Add a method to the `person` object named `makeBirthday`. The method shall
change the value of the 'age` property of that person by adding `1` each time
is called.
*/
person.makeBirthday = function() {
    this.age += 1
}

/*
Add a method to the `person` object named` walk`, which will have the following
features:
- This method shall receive by parameter a value that will represent the quantity
of meters walking;
- It must change the value of the `walked` property, adding to the
value of this property the quantity passed by parameter;
- It should modify the value of the `walking` property to the value
boolean that represents "true";
*/
person.walk = function(meters) {
    this.walked += meters
    this.walking = true
}

/*
Add a method to the `person` object named `stop`, which will change the value
of the property `walking` to the Boolean value that represents 'false'.
*/
person.stop = function() {
    this.walking = false
}

/*
Create a method named `completeName`, which returns the phrase:
- "Hello, my name is [FIRSTNAME] [LASTNAME]!"
*/
person.completeName = function() {
    return `Hey! My name is ${this.firstName} ${this.lastName}`
}

/*
Create a method called `showAge`, which returns the phrase:
- "Hello, I have [AGE] years!"
*/
person.showAge = function() {
    return `Hey! i have ${this.age} years old!`
}

/*
Create a method called `showWheight`, which returns the phrase:
- "I weigh [WEIGHT] kg."
*/
person.showWheight = function() {
    return `I wheight ${this.wheight}Kg.`
}

/*
Create a method named `showHeight` that returns the phrase:
- "My height is [HEIGHT]m."
*/
person.showHeight = function() {
    return `My height is ${this.height}m`
}

/*
Now let's play a little with the created object:
What is the full name of the person? (Use the statement to respond and comments
inline next to the statement to show which response was returned)
*/
console.log(person.completeName()) // 'José Matela'

/*
How old is the person? (Use the statement to respond and comments
inline next to the statement to show which response was returned)
*/
console.log(person.showAge()) // 19

/*
What is the weight of the person? (Use the statement to respond and comments
inline next to the statement to show which response was returned)
*/
console.log(person.showWheight()) // 99

/*
How tall is the person? (Use the statement to respond and comments
inline next to the statement to show which response was returned)
*/
console.log(person.showHeight()) // 1.75

/*
Make the 'person' do 3 birthdays.
*/
for (let i = 0; i < 3; i++) {
    person.makeBirthday()
}

/*
How old is the person now? (Use the instruction to respond and
inline comments next to the statement to show what the answer was
returned)
*/
console.log(person.showAge()) // 22

/*
Now, make the `person` walk a few meters, invoking the` walk` method 3x,
with different footage passed by parameter.
*/
person.walk(1)
person.walk(2)
person.walk(3)

/*
Is the person still walking? (Use the statement to respond and comments
inline next to the statement to show which response was returned)
*/
console.log(person.walking) // true

/*
If the person is still walking, make it stop.
*/
person.stop()

/*
And now: is the person still walking? (Use an instruction to respond and
inline comments next to the statement to show the returned response)
*/
console.log(person.walking) // false

/*
How many meters has the person walked? (Use an answer statement and comments
inline next to the statement to show the returned response)
*/
console.log(person.walked) // 6

/*
Now let's play a little more fun! : D
Create a method for the `person` object named` presentation`. This method should
return string:
- Hello, I am the [COMPLETE NAME], I have [AGE] years, [HEIGHT], my weight is [WEIGHT] and, just today, I already walked [WALK AS MANY METERS] meters!

However, before returning the string, you will do some validations:
- If the `sex` of` person` is 'Female', the above sentence at the beginning of
presentation, where it says "I am the", it should show "a" in place of the "o";
- If age is `1`, the above sentence, in the part about age, will show the
word "year" rather than "years", for it is singular;
- If the number of meters walked is equal to `1`, then the word that
must contain in the return of the above phrase is "meter" instead of "meters".
- For each validation, you will declare a variable locally (within the
method), which will be concatenated with the return phrase, showing the response
correct, according to the data inserted in the object.
*/
person.apresentation = function() {
    let sex = 'o'
    let age = 'years old'
    let walked = 'meters'
    if (this.sex === 'Female') {
        sex = 'a'
    }
    if (this.age === 1) {
        age = 'year old'
    }
    if (this.walked === 1) {
        walked = 'meter'
    }
    return `Hy! i'am ${this.firstName} ${this.lastName}, i am ${this.age} ${age}, ${this.height}, my wheight is ${this.wheight} and, today, i already walked ${this.walked} ${walked}`
}

// Now, introduce yourself;)
console.log(person.apresentation())