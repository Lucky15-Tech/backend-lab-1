
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Node.js and Express server!");
});


app.get("/about", (req, res) => {
  res.status(200).json({
    name: "B. Satya Rugved",
    section: "CSE(QE)- 113",
    registrationNumber: "252U1R8006"
  });
});


app.get("/time", (req, res) => {
  res.status(200).json({
    currentTime: new Date().toString()
  });
});


app.use((req, res) => {
  res.status(404).send("404 - Error: Page not found");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
