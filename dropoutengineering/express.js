const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL Connection Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const { name, lastName, email, message } = req.body;

    // Insert data into MySQL
    pool.query('INSERT INTO messages (
