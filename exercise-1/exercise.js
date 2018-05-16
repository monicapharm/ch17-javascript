'use strict';

//Make a new variable `motto` for the value "The iSchool is my school"
var motto = "The iSchool is my school";

//Log out the motto
console.log(motto);

//Define a variable `mottoLength` that stores the length of the motto
//(use the `.length` property). Log out the length.
var mottoLength = motto.length;
console.log(mottoLength);

//Use the slice() method to extract the characters `iSchool` into a new variable.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods.
//You'll need to count letters to determine arguments.
//Log out the extracted characters.
var part = motto.slice(4,11);
console.log(part);

//Use the `indexOf()` String method to see if the word "cool" is in the string.
//Log out a boolean whether it is or not
var coolLocation = motto.indexOf('cool');
console.log(coolLocation >= 0);

//Create a variable `name` that is your name.
var name = 'Joel';

//Create a variable `namePossessive` that is the `name` variable followed by an
//`'s`. Use string concatenation.
var namePossessive = name + "'s";

//Replace the word 'my' in the motto with the `namePossessive` variable.
//Log out the new motto.
motto = motto.replace('my', namePossessive)
console.log(motto)

//Log out the difference in length between the original motto and the new motto.
console.log(motto.length - mottoLength);
