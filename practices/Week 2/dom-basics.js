const newParagraph = document.createElement("p");
newParagraph.innerText = "Added With JS!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "https://picsum.photos/200");
document.body.appendChild(newImage);





const newSection = document.createElement("section"); //create the section
const newHtwo = document.createElement("h2"); //create the h2

newHtwo.innerText = "CSE 121b"; //define the h2
newSection.appendChild(newHtwo); //appends h2 inside section

const newWelcome = document.createElement("p"); //create p
newWelcome.innerText = "Welcome to Javascript Language"; // define p

newSection.appendChild(newWelcome);// we add the p inside of section


document.body.appendChild(newSection); //We add the section into the body


// And so we added a section, h2 and p