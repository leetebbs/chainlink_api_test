const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from server!",
    testResponse: "this is a test response",
  });
});

app.get("/api/videos", (req, res) => {
  res.json({
    day1: "https://www.youtube.com/watch?v=G7V-G7RURDI",
    day2: "https://www.youtube.com/watch?v=c5YwxmuWIcw",
    day3: "https://www.youtube.com/watch?v=E1sBc1YFgus",
    day4: "https://www.youtube.com/watch?v=5IFeP0gdcpM",
    day5: "https://www.youtube.com/watch?v=xSfTQ66qUm0",
    day6: "https://www.youtube.com/watch?v=WjBmwy5NDgU",
    day7: "https://www.youtube.com/watch?v=XjzJtD2ySQ0",
    day8: "https://www.youtube.com/watch?v=-tBZsxsE8K0",
    day9: "https://www.youtube.com/watch?v=jK6NMxz3wvc",
    day10: "https://www.youtube.com/watch?v=7i6gAp5Sx84",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello from server!",
    testResponse:
      "Congrats you have made it to Tebbos Chainlink Bootcamp 2024 API test server!",
    twitter: "https://twitter.com/LTebbs2",
    linkedin: "https://www.linkedin.com/in/tebbo-/",
    github: "https://github.com/leetebbs",
    linktree: "https://linktr.ee/tebbo",
    website: "https://portfolio-leetebbs.vercel.app/",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
