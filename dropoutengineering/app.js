require('dotenv').config({ path: './secure.env' });
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views')); // Set the views directory

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Define routes
app.get('/', (req, res) => {
    res.render('animate'); // Render the animate.ejs file
});

app.post('/submit-form', async (req, res) => {
    const { name, lastName, email, message } = req.body;

    // Insert data into Supabase
    const { data, error } = await supabase
        .from('messages')
        .insert([{ first_name: name, last_name: lastName, email, message }]);

    if (error) {
        console.error(error);
        res.render('dataupdatefail');
    } else {
        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We Received Your Data',
            text: `Hi ${name},\n\nThank you for getting in touch with us. We have received your message and will get back to you shortly.\n\nBest regards,\nDropout Engineering`
        };

        // Send email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending email:', err);
                res.render('dataupdatefail');
            } else {
                console.log('Email sent:', info.response);
                res.render('datasuccessful');
            }
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
