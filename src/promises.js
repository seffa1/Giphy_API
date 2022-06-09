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

function createPost(post) {
  return new Promise((resolve, reject) => {
    // after 2000ms, creats a new post
    setTimeout(() => {
      posts.push(post);
      console.log("Creating post...");

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "post three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async / Await ----------------------------------------------------------------------
async function init() {
  await createPost({ title: "post three", body: "This is post three" });
  getPosts();
}

// init();

// Async / Await with fetch ----------------------------------------------------------------------
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

fetchUsers();

// Promise.all ----------------------------------------------------------------------
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// also finish this video, im at 17:03 :
// https://www.youtube.com/watch?v=QO4NXhWo_NM
