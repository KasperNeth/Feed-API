const express = require("express");


// Create an HTTP server
const PORT = 3000;

// Create an express app
const app = express();

app.use(express.json());

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.json({ message: "Welcome To Feed App Api" });
});

//route for not found pages
app.get('*', (req, res) => {
  res.status(404).json({ message: "Page not found", code: 404 });
});



// Listen for incoming connections
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});