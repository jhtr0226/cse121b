/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
}
let subtractNumbers = function () {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;
let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = function (dividend, divisor) {
    return dividend / divisor;
}
let divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = new Date().getFullYear();
/*I don't know how to do step 3*/
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let thisIsAnArray = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = thisIsAnArray;

/* Output Odds Only Array */
let odds = thisIsAnArray.filter(oddNumber => oddNumber % 2 != 0);
document.getElementById("odds").textContent = odds;

/* Output Evens Only Array */
let evens = thisIsAnArray.filter(evenNumbers => evenNumbers % 2 === 0);
document.getElementById("evens").textContent = evens;

/* Output Sum of Org. Array */
let sumOfArray = thisIsAnArray.reduce((sumingNumber, number) => sumingNumber + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedNumbers = thisIsAnArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedNumbers;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = thisIsAnArray.map(number => number * 2).reduce((sumingNumber, number) => sumingNumber + number, 0); //this is a copy n paste
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied