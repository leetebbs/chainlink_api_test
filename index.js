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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
