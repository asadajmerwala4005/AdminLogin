import jwt from 'jsonwebtoken';

const verifyAdmin = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ message: "Not Authorized, Login Again" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the email in the token matches your Admin email in .env
        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ message: "Access denied. Not an admin." });
        }

        req.adminEmail = decoded.email;
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default verifyAdmin;
