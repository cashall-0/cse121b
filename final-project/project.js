let musicList = [];
const data  = {};
const musicElement = document.querySelector("#musDiv");


const reset = ()=>{
    const cards = document.querySelectorAll('.music-card');
    cards.forEach(card => {
        card.remove();
    })
}

const displayMusic = (musList) => {
    musList.forEach(music => {
        let newMusic = document.createElement("div");
        newMusic.setAttribute("class", "music-card");

        let musicName = document.createElement("h3");
        musicName.innerHTML = `${music.title}`;

        let musicImage = document.createElement("img");

        let artist = document.createElement("p");
        artist.innerHTML = `Artist: ${music.artist}`;

        let moreInfo = document.createElement("p");
        let moreInfoLink = document.createElement("a");
        moreInfoLink.innerHTML = "More Info";
        moreInfoLink.setAttribute("href", `${music.trackUrl}`);
        moreInfoLink.setAttribute("target", "_blank");
        moreInfo.appendChild(moreInfoLink);

        musicImage.setAttribute("src", music.imageUrl);
        musicImage.setAttribute("alt", music.title);

        newMusic.appendChild(musicImage);
        newMusic.appendChild(musicName);
        newMusic.appendChild(artist);
        newMusic.appendChild(moreInfo);

        musicElement.appendChild(newMusic);
        

    });

};


const searchApi = async (data) =>{
    const url = `https://shazam.p.rapidapi.com/search?term=${data.term}&locale=en-US&offset=0&limit=${data.limit}`;
    // kiss%20the%20rain  sample data
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd90b7014cmshc5226b3cd4625bdp1b832ejsn14974329efbf',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const res = await response.text();
	// console.log(result);
    let result = JSON.parse(res);
    musicList = extractMusicDetails(result);
    displayMusic(extractMusicDetails(JSON.parse(res)));

} catch (error) {
	console.error("Error fetching data..",error);
}
}

const getApiParams = () =>{
    let rawSearchString = document.getElementById("searchInput").value;
    let limit  = document.getElementById("count").value;
    data.term = replaceSpacesWithPercent20(rawSearchString);
    data.limit = limit;

}
function extractMusicDetails(apiResponse) {
    // console.log(apiResponse);
    let hits = apiResponse.tracks.hits;
    const musicDetails = [];
  
    hits.forEach(hit => {
      const track = hit.track;
      const title = track.title;
      const subtitle = track.subtitle;
      const imageUrl = track.images.coverart;
      const trackUrl = track.url;
  
      const detail = {
        title: title,
        artist: subtitle,
        imageUrl: imageUrl,
        trackUrl: trackUrl
      };
  
      musicDetails.push(detail);
    });
    return musicDetails;
  }
  
function replaceSpacesWithPercent20(str) {
    return str.replace(/ /g, "%20");
}


/* Event Listener */
document.querySelector("#sEvent").addEventListener("click", () => {
    reset();
    getApiParams();
    searchApi(data);
});