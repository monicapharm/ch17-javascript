'use strict';

//Define a function addFive() that takes a single argument and returns a value
//5 greater than the input.
function addFive(value){
  return value+5;
}

//Create and log a variable `sixteen` that is the result of passing 11 to your
//addFive() function.
var sixteen = addFive(11);
console.log(sixteen);

//Create and log a variable `sixteenString` that is the result of passing "11"
//(a string) to your addFive() function. Consider what this tells you about how
//the function should be described (e.g., in a comment?)
var sixteenString = addFive("1")
console.log(sixteenString);

//Create a variable `plusFive` that is equal to your `addFive` function.
var plusFive = addFive;

//Call the plusFive() function, passing in the number 9, and log the results.
console.log(plusFive(9));


//Create an ANONYMOUS function assigned to a `makePizza` variable. This function
//should take in two arguments (size and a topping), and then logs out a String
//describing the given pizza (e.g., "A large pizza with anchovies").
var makePizza = function(size, topping){
  console.log("A "+size+" pizza with "+topping);
}

//Call the makePizza() function with arguments 'large' and 'anchovies'.
makePizza('large', 'anchovies');

//Call the makePizza() function again with THREE arguments (a size and two toppings).
//What happens?
makePizza('large', 'anchovies', 'avocados');

//Call the makePizza() function again with only ONE argument (no size, just a topping)
//What happens?
makePizza('anchovies')



//Bonus: call the "myFunction" function below with whatever arguments you want!
//What happens? What can you infer about the `arguments` variable in a function?
function myFunction(){
  console.log(arguments);
};

myFunction(1,2,3,4)
