/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Johann Helaman Tellez Rodriguez";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me.jpeg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home picture img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);





/* Step 5 - Array */
let favoriteFoods = ["Gallo Pinto", "Chocolate", "Pizza", "Burgers"];

foodElement.innerHTML = favoriteFoods.join(", ");

let newFavoriteFoods = "Arroz con pollo";

favoriteFoods.push(newFavoriteFoods);

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;





