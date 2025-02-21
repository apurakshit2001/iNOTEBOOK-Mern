const jwt = require('jsonwebtoken'); // For generating JSON Web Tokens
const JWT_SECRET = 'ThisIsASecret'; // Secret key used to sign JWT tokens (keep this secure in production)

const fetchUser = (req, res, next) => {
    // Get the user from the JWT token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchUser;