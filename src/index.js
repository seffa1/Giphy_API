const giphyApiKey = "Fpsa0uaTC4sKKRR9sgX0JgIspnAzvtLf";
document.getElementById("search-btn").addEventListener("click", getGifs);

function getGifs() {
  // Clear current gifs
  let gifContainer = document.getElementById("gif-container");
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }

  // Get search string and clear the search
  const searchString = document.getElementById("input-search").value;
  document.getElementById("input-search").value = "";

  // Get gifs
  let request = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchString}&limit=10&lang=en`;

  fetch(request)
    .then((response) => response.json())
    .then((json) =>
      json.data.forEach((gifObject) => {
        console.log(gifObject);
        let url = gifObject.images.fixed_height.url;
        console.log(url);
        let image = document.createElement("img");
        image.src = url;
        gifContainer.appendChild(image);
      })
    )
    .catch((error) => console.log(error));
}

// Giphy API Docs
// https://developers.giphy.com/docs/api/endpoint#upload

// Example url
// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

// const gifUrl = "api.giphy.com/v1/gifs/search";
let searchString = "corgi";
