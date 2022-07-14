// let person = {
//     name: "khali G",
//     age: 37,
//     inClass: true,
//     classesTaught: ['Javascript','arrays']
// }

// console.log(person.name)
// console.log(person['name'])

// console.log(person.classesTaught[0])
// console.log(person["classesTaught"][0])

// console.log(person.name)
// person.name = "khali"
// console.log(person.name)

// console.log(person)
// delete person.name
// console.log(person)


// let person = {
//     name: "khali G",
//     age: 37,
//     inClass: true,
//     classesTaught: ['Javascript','arrays']
// }
// person.name = "khali" // edit
// person.hasGlasses = true // add a new property
// console.log(person)

// person.Age = 21 // mistyped age by mistake
// console.log(person)



// let {name, age} = person
// console.log(name)
// console.log(age)


// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf("age") != -1
// console.log(hasAge)




// Lab 1 - Object

// Create an object that will include a student's info with the following values:
// - Name (with your own name)
// - Age (with any age)
// - inClass (having a boolean value stating if you're in class or not)

// Now do the following with the oject:
// - Display the object to the user (on the screen)
// - Display just the name of the student variable 
// - Change "Age" another number.
// - Display the student's Age 

let person = {
        name: "khali G",
        age: 37,
        inClass: true,
}

console.log(person)
console.log(person.name)

person.age = 26
console.log(person.age)


