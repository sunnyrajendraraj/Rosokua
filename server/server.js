// Importing required dependencies
const express = require('express');       // Express framework for building Node.js applications
const mongoose = require('mongoose');     // Mongoose for interacting with MongoDB
const cookieParser = require('cookie-parser'); // Middleware for parsing cookies
const cors = require('cors');             // Middleware for enabling Cross-Origin Resource Sharing (CORS)

// Connecting to MongoDB database using Mongoose
mongoose.connect('mongodb+srv://sunnyrajendraraj:Dehri@998@cluster0.uoqma.mongodb.net/')
    .then(() => console.log('MongoDB Connected'))  // Logs success message if connection is successful
    .catch((error) => console.log(error));        // Logs error message if connection fails

// Creating an Express application
const app = express();

// Defining the port number, using environment variable if available, otherwise default to 5000
const PORT = process.env.PORT || 5000;

// Enabling CORS to allow cross-origin requests from the frontend
app.use(
    cors({
        origin: 'http://localhost:5173/', // Allow requests only from this frontend URL (React, Vue, etc.)
        methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allowed HTTP request methods
        allowedHeaders: [ // Headers allowed in requests
            "Content-Type", 'Authorization', "Cache-Control", 'Expires', 'Pragma'
        ],
        credentials: true // Allow cookies and authentication headers in requests
    })
);

// Middleware for parsing cookies from incoming requests
app.use(cookieParser()); 

// Middleware for parsing JSON request bodies
app.use(express.json()); // Allows the backend to handle incoming JSON data

// Starting the Express server and listening for incoming requests
app.listen(PORT, () => console.log(`Server is now running at port ${PORT}`)); // Logs the server startup message
