const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router(); // Create a new router instance
const { body, validationResult } = require('express-validator'); // For validating and sanitizing input
const bcrypt = require('bcryptjs'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating JSON Web Tokens
const fetchUser = require('../middleware/fetchUser');

// Secret key used to sign JWT tokens (keep this secure in production)
const JWT_SECRET = 'ThisIsASecret';

// Route 1: Create a new user using POST "/api/auth/createuser". No login required.
router.post('/createuser', [
    // Validate input fields
    body('email', 'Enter a valid email').isEmail(), // Ensure email is valid
    body('name', 'Please enter a valid name').isLength({ min: 3 }), // Name must be at least 3 characters
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }) // Password must be strong
],
    async (req, res) => {
        // Return errors if validation fails
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Send validation errors as response
        }

        // Try-catch block to handle potential errors
        try {
            // Check if a user with the same email already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry, a user with this email already exists" });
            }

            // Generate a salt for hashing the password
            const salt = await bcrypt.genSalt(10);
            // Hash the password for security
            securePassword = await bcrypt.hash(req.body.password, salt);

            // Create a new user and save to database
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword
            });

            // Prepare the payload for generating JWT
            const data = {
                user: {
                    id: user.id // Use the user's unique ID as the payload
                }
            };
            // Sign and generate a JSON Web Token
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken: authToken }); // Send token as response
        } catch (error) {
            // Log the error and return a 500 response
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    });

// Route 2: Authenticate user using POST "/api/auth/login". No login required.
router.post('/login', [
    // Validate input fields
    body('email', 'Enter a valid email').isEmail(), // Ensure email is valid
    body('password', 'Password cannot be blank').exists() // Ensure password is provided
],
    async (req, res) => {
        // Return errors if validation fails
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Send validation errors as response
        }

        const { email, password } = req.body; // Destructure email and password from the request body
        try {
            // Check if user exists in the database
            let user = await User.findOne({ email });
            if (!user) {
                // If user is not found, send an error response
                return res.status(400).json({ error: "Please try to login with correct credentials" });
            }

            // Compare the provided password with the stored hashed password
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                // If passwords don't match, send an error response
                return res.status(400).json({ error: "Please try to login with correct credentials" });
            }

            // Prepare the payload for generating JWT
            const data = {
                user: {
                    id: user.id // Use the user's unique ID as the payload
                }
            };
            // Sign and generate a JSON Web Token
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken: authToken }); // Send token as response
        } catch (error) {
            // Log the error and return a 500 response
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    });



// Route 3: Get loggedin user details using POST "/api/auth/getuser". Login required.
router.post('/getuser', fetchUser, async (req, res) => {
    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        // Log the error and return a 500 response
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router; // Export the router to use in the main app
