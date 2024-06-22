const jwt = require('jsonwebtoken');
const JWT_SECRET = "shhh";

const fetchuser = (req, res, next) => {
    // Get the token from the header
    const token = req.header('authToken');
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = fetchuser;
