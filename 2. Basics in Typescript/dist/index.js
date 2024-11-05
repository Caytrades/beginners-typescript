"use strict";
// Obligatory Types
// let myName: string = "Cay"
// let numberOfWheels: number = 4
// let isStudent: boolean = false
// Defining Custom Types
// type Food = string;
// let favoriteFood: Food = "pizza"
// Creating Custom Types Around Objects (TypeSafety)
// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
// }
// let person1: Person = {
//     name: "Joe",
//     age: 42,
//     isStudent: true
// }
// let person2: Person = {
//     name: "Jill",
//     age: 66,
//     isstudent: false
// }
// Nested Object Types
// type Address = {
//     street: string
//     city: string
//     country: string
// }
// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
//     address: Address
// }
// let person1: Person = {
//     name: "Joe",
//     age: 42,  
//     isStudent: true,
//     address: {
//         street: "Mango Road",
//         city: "Kumasi",
//         country: "Ghana"
//     }
// }
// let person2: Person = {
//     name: "Jill",
//     age: 66,
//     isStudent: false
// }
// Optional Properties the "?" reduces TypeSafety
// type Address = {
//     street: string
//     city: string
//     country: string
// }
// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
//     address?: Address
// }
// let person1: Person = {
//     name: "Joe",
//     age: 42,  
//     isStudent: true,
//     address: {
//         street: "Mango Road",
//         city: "Kumasi",
//         country: "Ghana"
//     }
// }
// let person2: Person = {
//     name: "Jill",
//     age: 66,
//     isStudent: false
// }
// function displayInfo(person) {
//     console.log(`${person.name} lives at ${person.address?.street}`)
// }
// displayInfo(person2)
// Typing Arrays
let ages = [100, 101];
let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true,
};
let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false
};
// An array of people objects and manually type it as an array of Person types
// let people: Person[] = [person1, person2]
let people = [person1, person2];
console.log(people);
//# sourceMappingURL=index.js.map