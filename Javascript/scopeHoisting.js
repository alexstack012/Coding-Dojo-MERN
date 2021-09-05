const beatles = ['Paul', 'George', 'John', 'Ringo'];
//array declaration
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) { //for loop, variable index is declared
            const name = names[index]; //immutable variable name declared inside the loop

            console.log(name + ' was found at index ' + index); //console will log the names in the
            //array starting at 0 followed by a string then at the index of the array that name was found
        }
    }
    actuallyPrintingNames();
    //funtion is called outside of its function but inside the first function
}
printNames(beatles);
//function call to run first function



//output
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
//----------------------------------------------------------------------------------------
//-------------HOISTING----------------
//-----------------------------------------------------------------------------------------


// console.log(magicalUnicorns);
// var magicalUnicorns = "awesome";

// If you ran the above code, you might have noticed something odd.
// There was no ReferenceError.Instead our console.log output undefined.
// Something else must be going on here.What's really happening is our var variable is being HOISTED.

// var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
// console.log(magicalUnicorns); // we log it as undefined
// magicalUnicorns = "awesome"; // the assignment stays exactly where it was

//output is undefined


//----------------------------------------------------------------------------------------
//-------------example 2----------------
//----------------------------------------------------------------------------------------

var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic() {         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

//output is...
// hello world
// bar

// Key Rules of Hoisting
// • Variable declarations (var) rise to the top of their scope like hot air balloons.

// • Functions create their own scope and act like cages, preventing declarations from rising out.

// • Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

// • let and const do not get hoisted, and will throw an error if called before they are declared.
// const will even throw a syntax error if it is called before it is assigned.