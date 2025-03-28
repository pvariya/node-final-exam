const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    // Log to see if the token is being passed correctly
    console.log('Authorization Header:', req.headers.authorization);
    console.log('Cookies:', req.cookies);

    // Try to get the token either from cookies or from the Authorization header
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    // If no token is found, send an access denied response
    if (!token) {
        console.log('No token provided');  // Log the issue
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, 'private-key');
        req.user = decoded; // Attach the decoded user to the request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.log('Token verification failed:', error);  // Log any error during verification
        return res.status(401).json({ message: 'Invalid token.' });
    }
};

module.exports = authenticateToken;
