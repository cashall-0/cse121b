/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Siyaka Promise",
    photo:"images/byupro.jpeg",
    favouriteFoods:[
        'rice',
        'beans',
        'Oat',
        'milk',
        'shrimp',
        'Ice cream'
    ],
    hobbies:[
        'hiking',
        'running',
        'reading',
        'camping',
        'movies'
    ],
    placesLived:[]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place:"anambra, Nigeria",
    length:"5 years"
});
myProfile.placesLived.push({
    place:"Owerri, Nigeria",
    length:"6 years"
})

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favouriteFoods.forEach(food => {
    let newLi = document.createElement('li');
    newLi.textContent = food;
    document.querySelector('#favorite-foods').appendChild(newLi);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let newLi = document.createElement('li');
    newLi.textContent = hobby;
    document.querySelector('#hobbies').appendChild(newLi);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let newDt = document.createElement('dt');
    let newDd = document.createElement('dd');
    newDt.textContent = place.place;
    newDd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(newDt);
    document.querySelector('#places-lived').appendChild(newDd);
});



