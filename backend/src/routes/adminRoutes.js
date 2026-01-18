import express from 'express';
import { adminLogin, getAdmin } from '../controllers/adminController.js';
import verifyAdmin from '../middleware/authMiddleware.js';

const router = express.Router();

// 1. To Login
router.post("/login", adminLogin);

// 2. To Check if Admin is real (used by your React AdminContext)
router.get("/getadmin", verifyAdmin, getAdmin);
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
});
export default router;
