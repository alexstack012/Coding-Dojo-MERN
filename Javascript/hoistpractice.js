// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER


// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//----------------------------------------------------------------------------------------------------------------------------//
// 1
//console.log(hello); //logs undefined
// var hello = 'world';
//let hello = 'world' //ReferenceError: Cannot access 'hello' before initialization

// 2
// var needle = 'haystack'; // says needle = haystack
// test(); //function call
// function test(){
//     // var needle = 'magnet'; // reassigns needle to now = magnet
//     console.log(needle); // logs magnet
// }


// let needle = 'haystack'; // says needle = haystack
// test(); //function call
// function test() {
//     let needle = 'magnet'; //reassigns needle to now = magnet
//     console.log(needle); //logs magnet
// }


//here var and let were the same


// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//output is 'super cool' because the function is never called


// var food = 'chicken';
// console.log(food); //logs the above variable 
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food); //logs half-chicken since its within the function when the function is called, and before gone
//     var food = 'gone';
// }

// 5
// mean(); //function call
// console.log(food);
// var mean = function () { //variable mean is using a function. there is no function called mean
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//output 
//TypeError: mean is not a function

// 6

// console.log(genre); //genre is not defined yet
// var genre = "disco";
// rewind(); //function call
// function rewind() {
//     genre = "rock";
//     console.log(genre); //now that the function is called it logs rock here
//     var genre = "r&b";
//     console.log(genre);// and r&b here
// }
// console.log(genre); //this will log disco as it will refer to the genre variable outside the function

//output
// undefined
// rock
// r&b
// disco


// 7
// dojo = "san jose";
// console.log(dojo); //logs san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); //logs seattle
//     var dojo = "burbank";
//     console.log(dojo); //logs burbank
// }
// console.log(dojo); //logs first dojo declaration outside the function so this logs san jose again

//output
// undefined
// san jose
// seattle
// burbank
// san jose


// 8

// console.log(makeDojo("Chicago", 65)); //logs { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0));//because with line 126 you cant change a const variable, this throws a type error in the console
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

//output
// { name: 'Chicago', students: 65, hiring: true }
// C:\Users\alaly\Desktop\CODE\.DOJO\MERN\Javascript\hoistpractice.js:126
//         dojo = "closed for now";
//              ^

// TypeError: Assignment to constant variable.