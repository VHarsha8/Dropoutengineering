const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Create an Express app
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse form data

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'root', // Your MySQL password
  database: 'mydatabase' // Your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Render the EJS file
app.get('/', (req, res) => {
  res.render('animateblobharsha.ejs');
});

app.get('/home',(req, res) => {
    res.render('animationblobharsha.ejs');
})

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, password } = req.body;

  const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
  db.query(query, [name, password], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.send('Error: User already exists.');
      } else {
        console.error('Error inserting data:', err);
        res.status(500).send('Server error');
      }
      return;
    }
    res.send('Form data saved successfully');
  });
});

// Start the server
const server = app.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`);
});
