'use strict';

/** Arrays **/

//Create an array `numbers` that contains the first 5 decimals of Pi
//(e.g., 1 4 1 5 9).
//Log out the array.
var numbers = [1, 4, 1, 5, 9];
console.log(numbers);

//Use bracket notation to change the `4` in the array to a `4.2`.
//Log out the updated array.
numbers[1] = 4.2
console.log(numbers);

//Add the number 2 to the end of the array.
//Log out the updated array
numbers.push(2);
console.log(numbers);

//Use the splice() method to add the number 7 between the 5 and the 9.
//See https://www.w3schools.com/jsref/jsref_splice.asp.
//Log out the updated array.
numbers.splice(3, 0, 7);
console.log(numbers);

//Log out the length of the array. Use the .length property
console.log(numbers.length);

//Use bracket notation to add the number 100 at an index equal to the
//length of the array + 1.
//Log out the array as well as its length. What happened?
numbers[numbers.length + 1] = 100;
console.log(numbers);


/** Objects **/

//Create a variable `rect` that represents a rectangle. This should be an Object
//with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//Log out the rectangle.
var rect = {x:30, y:50, width:100, height:50};
console.log(rect);

//Log out the x- and y- coordinates of the rectangle (its location). Your output 
//should have the format `"X, Y"`.
console.log(rect.x + ', ' + rect.y);

//Set the rectangle's height to be the square root of its width. Use Math.sqrt()
//Use *dot notation* to access the properties!
rect.height = Math.sqrt(rect.width);

//Log out the rectangle's area. Use *dot notation* to access the properties!
console.log(rect.width*rect.height);

//Create a variable `circle` that represents a circle. This should be an object
//with properties
//  `cx` (center-x-coordinate), `cy`, and `radius`
//assigned the first 3 numbers from the above array (respectively)
//Log out the circle
var circle = {
  cx: numbers[0],
  cy: numbers[1],
  radius: numbers[2]
};
console.log(circle);

//Create an array `shapes` that represents a list of shapes. The array should
//contain the rectangle and the circle objects defined above.
//Log out the variable. Be sure to inspect it in the developer console!
var shapes = [rect, circle];
console.log(shapes);

//Add a new ANONYMOUS object to the `shapes` array representing a triangle.
//The triangle should have a base of `33` and a `height` of `44`.
//Log out the shapes array
shapes.push({base:33, height:44})

//Log out the triangle's `hypotenuse` property. What do you get?
console.log(shapes[2].hypotenuse);

//Assign the triangle inside the `shapes` array a 'hypotenuse' property of 55
//Log out the `shapes` array again.
//Check: what happens if you inspect the previously logged array in the Chrome
//developer console?
shapes[2].hypotenuse = 55;
