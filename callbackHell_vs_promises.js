// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("User fetched");
//     callback({ id: id, name: "Lakshya" });
//   }, 1000);
// }
// // Simulating fetching posts for a user
// function getPosts(userId, callback) {
//   setTimeout(() => {
//     console.log("Posts fetched");
//     callback(["Post1", "Post2"]);
//   }, 1000);
// }
// // Simulating fetching comments for a post
// function getComments(post, callback) {
//   setTimeout(() => {
//     console.log("Comments fetched");
//     callback(["Nice!", "Awesome!"]);
//   }, 1000);
// }

// // Calling functions in sequence (Callback Hell)
// console.log("Starting...");
// getUser(1, (user) => {
//   console.log("User:", user);
//   getPosts(user.id, (posts) => {
//     console.log("Posts:", posts);
//     getComments(posts[0], (comments) => {
//       console.log("Comments:", comments);
//       console.log("Done!");
//     });
//   });
// });

// Using Promises to avoid callback hell
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: id, name: "Lakshya" });
    }, 1000);
  });
}         
function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["Post1", "Post2"]);
    }, 1000);
  });
}
function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["Nice!", "Awesome!"]);
    }, 1000);
  });
}

// Using async/await to avoid callback hell
async function fetchData() {
  try {
    const user = await getUser(1);
    console.log("User:", user);
    const posts = await getPosts(user.id);
    console.log("Posts:", posts);
    const comments = await getComments(posts[0]);
    console.log("Comments:", comments);
    console.log("Done!");
  } catch (error) {
    console.error("Error:", error);
  }
}
//await is a sequential and blocking code, it will wait for the promise 
// to resolve before moving to the next line of code.

console.log("Starting async/await flow...");
fetchData();

