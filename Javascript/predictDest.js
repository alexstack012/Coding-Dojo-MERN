// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// Problem 1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

//prediction
//tesla and mercedes

//output
//tesla
//mercedes

//-------------------------------- Problem 2 ----------------------------------------------------//

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

//prediction
//elon
//elon

//output
// console.log(name);
//             ^

// ReferenceError: name is not defined

//-------------------------------- Problem 3 ----------------------------------------------------//

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password);
// console.log(hashedPassword);


//prediction
//12345 & undefined

//output
// 12345
// undefined

//-------------------------------- Problem 4 ----------------------------------------------------//

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);


//prediction
//false 2 != 3 and true 2 = 2

//output
// false
// true



//-------------------------------- Problem 5 ----------------------------------------------------//

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [, willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);


//prediction
// "value" //this is key: 'value'
//[1, 5, 1, 8, 3, 3] //this is secondKey
//1 //this is [0]
//5 //this is [1] (the comma skips the first index)

//output