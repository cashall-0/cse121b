/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList =[];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let newTemple = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.innerHTML = `${temple.templeName}`;
        let templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.setAttribute("alt", temple.location);
        newTemple.appendChild(templeName);
        newTemple.appendChild(templeImage);
        templesElement.appendChild(newTemple);

    });

}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response  = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    .then(response => response.json())
    .then(data => {
      templeList = data;
    }).catch(error => {
        console.error('Error fetching data:', error);
      });
}


/* reset Function */
const reset = ()=>{
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.remove();
    })
}


/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById("filtered").value;
    
    switch (filter) {
        case "utah":
            filteredTemples = temples.filter(function(temple) {
                return temple.location.includes("Utah");
            });

          break;
        case "notutah":
            filteredTemples = temples.filter(function(temple) {
                return !temple.location.includes("Utah");
            });
          break;
        case "older":
            filteredTemples = temples.filter(function(temple) {
                return new Date(temple.dedicated) < new Date(1950, 0, 1);
            });
          break;
        case "all":
            filteredTemples = temples;
          break;
        default:
            console.error("Invalid option");
      }

      displayTemples(filteredTemples);
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
