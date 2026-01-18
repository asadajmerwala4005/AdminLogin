import { genToken1 } from "../config/token.js";

// Logic for Login
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = genToken1(email);

            res.cookie("token", token, {
                httpOnly: true,
                secure: false, // Set to true in 2026 production (HTTPS)
                sameSite: "Lax", 
                maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
            });

            return res.status(200).json({ message: "Login Success" });
        }
        return res.status(400).json({ message: "Invalid Admin Credentials" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Logic for Verification (Get Admin Data)
export const getAdmin = async (req, res) => {
    return res.status(200).json({
        email: req.adminEmail,
        role: "admin"
    });
};
