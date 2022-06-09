const posts = [
  { title: "post One", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

function getPosts() {
  // after 1000ms, adds each post to dom
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    console.log("getting posts...");
  }, 1000);
}

function createPost(post, callback) {
  // after 2000ms, creats a new post
  setTimeout(() => {
    posts.push(post);
    console.log("Creating post...");
    callback();
  }, 2000);
}
// This wont work if we want to create a new post then display it, since it takes longer to create the post than to display it
// createPost({ title: "post three", body: "this is post three" }
// getPosts()

// To solve this, we add the displaying of the posts as a callback which gets called only after the new post is created
createPost({ title: "post three", body: "this is post three" }, getPosts);

// We at 9:10
// https://www.youtube.com/watch?v=PoRJizFvM7s
