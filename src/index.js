// Giphy API Docs
// https://developers.giphy.com/docs/api/endpoint#upload

// Example url
// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

const giphyApiKey = "Fpsa0uaTC4sKKRR9sgX0JgIspnAzvtLf";
const gifUrl = "api.giphy.com/v1/gifs/search";
let searchString = "dog";

let request = `api.giphy.com/v1/gifs/search/?api_key=${giphyApiKey}&q=${searchString}&limit=1&lang=en`;
let thing = fetch(request);
