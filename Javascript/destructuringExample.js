// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


// Assume we want email from person and the first animal as standalone variables. Before ES6 that might look like this:
// BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];

// Let's do that again, but with destructuring assignment:

// // AFTER ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(firstAnimal);
// // => horse

//before es6
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

//after es6
// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;

//---------------------------------------------------------------------//

// const password = '12345';
// const { password: hashedPassword } = person;

// Specifying the property name, password, will access the value
// of that property on our object.The colon: after the property name
// followed by your new variable redirects the value of password to be
// held in hashedPassword, thereby eliminating the aforementioned identifier conflict.

//---------------------------------------------------------------------//
//---------------------------------------------------------------------//
//---------------------------------------------------------------------//

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//         {
//             address: '1600 Pennsylvania Avenue',
//             city: 'Washington, D.C.',
//             zipcode: '20500',
//         },
//         {
//             address: '221B Baker St.',
//             city: 'London',
//             zipcode: 'WC2N 5DU',
//         }
//     ],
//     createdAt: 1543945177623
// };

// If we want the individual addresses as variables we could certainly destructure addresses, then destructure each address.
// const { addresses: [whiteHouse, sherlock] } = person;

// What if we want to skip the first address and only want the city of the second, but using an alternate variable name?
// const { addresses: [ , { city: london }] } = person;
// console.log(london);
// => London