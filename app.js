const express = require("express");
const AuthRoutes = require("./routes/auth.routes");
const PostRoutes = require("./routes/post.routes");

// connects to the db
require('./db/db.js').connectToMongoDB()

// Create an HTTP server
const PORT = 3000;

// Create an express app
const app = express();

app.use(express.json());

// define routes
app.use('/auth', AuthRoutes);
app.use('/posts', PostRoutes)


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