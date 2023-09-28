//JS uses:
// Boolean: True/False
// Numbers
// Strings
// Null = has nothing
// Symbol
// Object
// Undefined (let car;//car = undefined;)

/////////////////////////////////////
//Data types are:
var variable = "general use"; // this can change and will be used as a "general variable"
let special = "special use for blocks"; // can change and it's used for specific "blocks"
const num = 5;//never changes

////////////////////////////////////////////////////////////
// This is an Array:
var variable = ["here", "a", "list"];
// And objects (Object properties are written as
//name:value pairs, separated by commas.)
var variable = { firstName: "John", lastName: "Doe" }

/////////////////////////////////////////////
//Templates literals
let variable = `<htmlElement>Hi! this is a ${template}</htmlElment>`;

////////////////////////////////////////////////////////////
// Methods for functional programs:
let firstItem = listOfItems[0] // and 1 for 2nd item/ add " = x " to change its value
firstItem.push(100); // Adds a new element to the end of the array
firstItem.pop(); // Removes the last element from the array
firstItem.shift(); // Removes the first element from the array
firstItem.unshift(100); // Adds a new element to the beginning of the array
firstItem.splice(2, 1); // Removes 1 element from the array starting at index 2

////////////////////////////////////////////////////////
// Methods:
// .map()    : 
//used when you want to transform the elements of an array in a specific way without modifying the original array
const steps = ["one", "two", "three"];
const stepsHtml = steps.map/*here start a fucntion*/(function (step) /*calls step*/ {
    return `<li>${step}</li>`; // returs it converted into html
});
document.getElementById("myList").innerHTML = stepsHtml.join();//Set the inner HTML of the element with the ID "myList" to the converted HTML list items and adds it to the HTML code
// .join() works to join all elements of an array into a string and can separate
//////////////
// .reduce()
// useful when we need to compress an array into a single value.
// most often used when the array has at least one value that can be mathematically flattened
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;
// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
//////////////
// .filter()
// it filters
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
    return word.length < 6;
});
//same thing with an arrow function
const shortWords = words.filter((word) /*this is the>*/ =>/*<arrow f():*/ word.length < 6);
//////////////
// .indexOf()
// returns the first index at which a given element can be found in the array, or -1 if it is not present.
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

//////////////////////////////////////////////////////////////////////////
// Event Handling:
/*
Events are things that happen in the system you 
are programming — the system produces (or "fires") 
a signal of some kind when an event occurs, and provides 
a mechanism by which an action can be automatically taken 
(that is, some code running) when the event occurs. Events 
are fired inside the browser window, and tend to be attached 
to a specific item that resides in it.
*/
// DOM Events:
/// Event Driven Programming:
/*
Differents events are:
the "window" object, such as due to resizing the browser,
the "window.screen" object, such as due to changes in device orientation,
the "document" object, including the loading, modification, user interaction, and unloading of the page,
the objects in the DOM (document object model) tree including user interactions or modifications,
the "XMLHttpRequest" objects used for network requests, and
the media objects such as "audio" and "video", when the media stream players change state.

Some notable events are:
the global object window emits an event called 'load' when 
the page has finished rendering, meaning that all resources 
have been downloaded and acted upon, so that the scripts have 
been run and the images displayed,
the global object window emits an event called 'resize' when 
the height or the width of the browser window is changed by a user,
the DOM object document representing the HTML document 
emits an event called 'DOMContentLoaded' when the document 
has finished loading,
the DOM node objects such as div or button emit an event 
called 'click' when the user presses the mouse button while 
the mouse pointer is on top of the DOM node in the HTML page.

*/
//How do we make something happen when a specific event happens?
// w/ callbacks (when we pass a f() into another f() (like nested ones?) addEventListener is an example)
// addEventListener => will always pass an object containing information about the event that happened into your callback function. It contains a lot of very useful information. 
target.addEventListener(type, listener[, options]); //structure
buttonElement.addEventListener("click", copyInput); /*aplication, from code:
const buttonElement = document.getElementById("submitButton");
function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
} 
button.......*/
//

////////////////////////////////////////////////////////////
// Functions:
// function declaration / definition:
function fullName(first, last) {
    return `${first} ${last}`
};
//anonymous function expression:
const fullName = function (first, last) {
    return `${first} ${last}`
}
// arrow function expression:
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
//  in existing HTML
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);