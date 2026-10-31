const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Node.js and Express server!");
});

app.get("/about", (req, res) => {
  res.status(200).json({
    name: "B. Satya Rugved",
    registrationNumber: "252U1R8006",
    section: "CSE(QE)- 113",
    lab: "Lab 01 – Node.js and Express Server",
    course: "Backend Development Fundamentals",
    faculty: "Shiva Sai Teja",
  });
});

app.get("/time", (req, res) => {
  const now = new Date();
  res.status(200).json({
    currentTime: now.toString(),
  });
});

app.use((req, res) => {
  res.status(404).send("404 - Error: Page not found");
});

module.exports = app;
