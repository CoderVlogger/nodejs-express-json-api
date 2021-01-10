const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

let posts = [
  { id: 1, slug: "post1", title: "Post #1", author: "Alex" },
  { id: 2, slug: "post2", title: "Post #2", author: "John" },
  { id: 3, slug: "post3", title: "Post #3", author: "Boris" },
];

function createError(status, message) {
  var err = new Error(message);
  err.status = status;
  return err;
}

app.get("/posts/", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  let body = {
    posts: posts,
  };

  res.send(JSON.stringify(body));
});

// TODO: Pass post id as a func param.
app.get("/posts/:post/", (req, res, next) => {
  const { post } = req.params;
  postID = post - 1;

  res.setHeader("Content-Type", "application/json");

  if (posts[postID]) {
    next();
  } else {
    next(createError(404, "failed to find post"));
  }

  let body = {
    post: posts[postID],
  };

  res.send(JSON.stringify(body));
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
