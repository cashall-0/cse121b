/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Siyaka Promise";
let currentYear = 2023;
const profilePicture = "images/byupro.jpeg"
const favoriteFood = "Rice and tomato stew";





/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');
const pictureElement = document.getElementsByTagName('img')[0];





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
pictureElement.setAttribute('src', profilePicture);
pictureElement.setAttribute('alt', `Profile image of ${fullName}`);






/* Step 5 - Array */
const foods = ["Egusi soup", "Moin moin", "Tuwo shinkafa", "Spicy cow feet"];
foodElement.innerHTML +=`<br>${foods}`;  

foods.push(favoriteFood);

foodElement.innerHTML +=`<br>${foods}`;  

foods.pop();

foodElement.innerHTML +=`<br>${foods}`; 

foods.shift();
foodElement.innerHTML +=`<br>${foods}`; 










