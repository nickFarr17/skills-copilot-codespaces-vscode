// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add middleware for handling JSON data
app.use(express.json());

// Add middleware for handling URL encoded data
app.use(express.urlencoded({ extended: true }));

// Add middleware for handling static files
app.use(express.static('public'));

// Add middleware for setting up the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Create an array to store comments
const comments = [];

// Display the form for submitting comments
app.get('/', (req, res) => {
  res.render('comments');
});

// Handle the form submission
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.render('comments', { comments });
});

// Display the comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});